# 用 Dokploy 部署本项目

本项目是纯静态的 Vite + React 应用，`npm run build` 后产出 `dist/` 目录，用 Nginx 托管即可。Dokploy 通过 Nixpacks 自动完成"安装依赖 → 构建 → 生成 Nginx 容器"全流程，零配置。

## 前置条件

| 条件 | 说明 |
|------|------|
| Linux 服务器 | 有公网 IP，推荐 Ubuntu 22.04+，最低 1C1G |
| Dokploy 已安装 | [安装文档](https://docs.dokploy.com/docs/core/get-started/introduction) |
| Git 仓库 | 项目代码已推送到 GitHub / GitLab / Gitea |

## 部署步骤

### 1. 创建项目与服务

1. 登录 Dokploy 控制面板
2. **Projects** → **Create Project**，命名为 `ai-agent-course`
3. 进入项目 → **Create Service** → **Application**，命名为 `slides` → **Create**

### 2. 配置 Git 源

进入服务 → **General** 标签：

| 字段 | 填写 |
|------|------|
| Provider | GitHub（或手动输入仓库 URL） |
| Repository | 你的仓库地址 |
| Branch | `main` |
| Build Path | 留空（使用项目根目录） |

### 3. 配置构建

同在 **General** 标签：

| 字段 | 填写 |
|------|------|
| Build Type | `Nixpacks`（默认值） |
| Publish Directory | `./dist` |

> Nixpacks 检测到 `package.json` 后会自动执行 `npm install` → `npm run build`，然后把 `dist/` 的内容复制到 Nginx 容器的 `/usr/share/nginx/html`。

### 4. 配置域名

进入 **Domains** 标签：

1. 点击 **Generate Domain**（自动生成测试域名）或 **Add Domain**（使用自定义域名）
2. **Container Port** 填 `80`
3. 如需 HTTPS，开启 **HTTPS** 开关（Dokploy 自动申请 Let's Encrypt 证书）

> 自定义域名需要先将 DNS A 记录指向服务器 IP。

### 5. 部署

1. 进入 **Deployments** 标签 → 点击 **Deploy**
2. 等待构建完成（首次约 1–2 分钟），状态变绿即成功
3. 点击域名链接，打开即可看到演示文稿

## 开启自动部署（推荐）

在服务的 **General** 标签中找到 **Auto Deploy** 并开启。之后每次 push 到指定分支，Dokploy 会自动拉取代码并重新部署。

## 常见问题

**构建失败（TypeScript 错误）**
→ 在 **Deployments** → 点击对应部署记录查看日志，修复代码后重新 push 即可。

**页面空白**
→ 检查 Publish Directory 是否设为 `./dist`。留空会导致 Nginx 托管项目根目录而非构建产物。

**自定义域名不生效**
→ 确认 DNS A 记录已指向服务器 IP，在 Dokploy 中添加域名后等待约 1 分钟完成 SSL 证书签发。

## 补充说明

- 本项目使用 hash 路由（`#0`, `#1` 等），Nginx 默认配置即可正常工作，无需额外配置
- 本项目不需要环境变量，如后续需要可在 **Environment** 标签中添加
