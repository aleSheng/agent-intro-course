# 用 Dokploy 部署本项目

本项目是纯静态的 Vite + React 应用，`npm run build` 后产出 `dist/` 目录，用 Nginx 托管即可。Dokploy 对此有开箱即用的支持。

## 前置条件

- 一台有公网 IP 的 Linux 服务器（推荐 Ubuntu 22.04+，最低 1C1G）
- 已安装 Dokploy（[安装文档](https://docs.dokploy.com/docs/core/get-started/introduction)）
- 项目代码已推送到 GitHub/GitLab/Gitea 等 Git 仓库

## 方法一：Nixpacks（推荐）

Nixpacks 会自动检测项目类型、安装依赖、构建、生成 Nginx 容器。零配置。

### 步骤

1. **登录 Dokploy 控制面板**

2. **创建项目**
   - 点击 **Projects** → **Create Project**，命名（如 `ai-agent-course`）

3. **创建服务**
   - 在项目内点击 **Create Service** → 选择 **Application**
   - 命名（如 `slides`）→ **Create**

4. **配置 Git 源**
   - 进入服务 → **General** 标签 → **Provider** 选 GitHub（或手动输入仓库 URL）
   - **Repository**：你的仓库地址
   - **Branch**：`main`（或你的主分支）
   - **Build Path**：留空（项目根目录就是构建目录）

5. **配置构建**
   - **Build Type**：`Nixpacks`（默认）
   - **Publish Directory**：`./dist`

   > Nixpacks 检测到 `package.json` 后会自动执行 `npm install` + `npm run build`，然后把 `dist/` 目录的内容复制到 Nginx 容器的 `/usr/share/nginx/html`。

6. **配置域名**
   - 进入 **Domains** 标签 → **Generate Domain**（自动生成）或 **Add Domain**（自定义域名）
   - **Container Port**：`80`
   - 如需 HTTPS，启用 **HTTPS** 开关（Dokploy 自动申请 Let's Encrypt 证书）

7. **部署**
   - 回到 **Deployments** 标签 → 点击 **Deploy**
   - 等待构建完成（首次约 1-2 分钟），状态变绿即成功

8. **访问**
   - 点击域名链接，打开即可看到演示文稿

### SPA 路由说明

本项目使用 hash-based 路由（`#0`, `#1` 等），Nginx 默认配置即可正常工作，无需额外的 `try_files` 配置。

## 方法二：Dockerfile（完全可控）

如果你需要自定义 Nginx 配置（如 gzip、缓存策略、自定义 headers），可以自己写 Dockerfile。

### 1. 创建 `Dockerfile`

在项目根目录创建：

```dockerfile
# 构建阶段
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# 运行阶段
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

### 2. 创建 `nginx.conf`

在项目根目录创建：

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    # gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml;
    gzip_min_length 1000;

    # 静态资源长缓存（Vite 带 hash 的文件名）
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 入口文件不缓存
    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache";
    }
}
```

### 3. Dokploy 配置

- **Build Type**：`Dockerfile`
- **Dockerfile Path**：`./Dockerfile`
- **Container Port**：`80`
- 其余同方法一

## 方法三：Static 构建类型

适合已经在本地构建好、只需要托管 `dist/` 的场景。

1. 本地运行 `npm run build`，将 `dist/` 目录提交到仓库
2. Dokploy 中 **Build Type** 选 `Static`
3. **Build Path** 设为 `./dist`
4. Dokploy 会直接把 `dist/` 挂载到 Nginx 容器，不做任何构建

> 注意：这种方式需要每次手动构建并提交 `dist/`，不推荐用于持续部署。

## 自动部署（推荐开启）

在 Dokploy 服务的 **General** 标签中找到 **Auto Deploy**，开启后：

- 每次 push 到指定分支，Dokploy 自动拉取代码并重新部署
- 也可以配置 GitHub Webhook 实现即时触发

## 环境变量（可选）

本项目不需要环境变量。如果后续需要，在 **Environment** 标签中添加即可，Nixpacks 会自动注入到构建过程。

## 常见问题

### 构建失败：`npm run build` 报 TypeScript 错误

Dokploy 的构建日志在 **Deployments** → 点击对应部署记录查看。修复代码后重新 push 即可自动重新部署。

### 页面空白

检查 **Publish Directory** 是否设为 `./dist`。如果留空，Nginx 会托管项目根目录而不是构建产物。

### 自定义域名不生效

确保域名的 DNS A 记录指向服务器 IP，然后在 Dokploy 中添加域名并等待 SSL 证书签发（约 1 分钟）。

## 参考链接

- [Dokploy 官方文档：Vite React 部署](https://docs.dokploy.com/docs/core/vite-react)
- [Dokploy 构建类型说明](https://docs.dokploy.com/docs/core/applications/build-type)
- [Dokploy 示例仓库](https://github.com/Dokploy/examples)
- [Vite 静态部署指南](https://vite.dev/guide/static-deploy)
