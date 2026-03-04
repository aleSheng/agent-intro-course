# 用 GitHub Pages 部署本项目

本项目是纯静态的 Vite + React 应用，可以通过 GitHub Actions 自动构建并部署到 GitHub Pages，无需自己的服务器。

## 前置条件

| 条件 | 说明 |
|------|------|
| GitHub 账号 | 项目代码已推送到 GitHub 仓库 |
| 仓库权限 | 你是仓库的 Owner 或有 Admin 权限 |

## 部署步骤

### 1. 配置 Vite base 路径

如果你的仓库名不是 `<username>.github.io`，GitHub Pages 会把站点部署到 `https://<username>.github.io/<repo-name>/` 子路径下，需要配置 `base`。

编辑项目根目录的 `vite.config.ts`，添加 `base` 字段：

```ts
export default defineConfig({
  base: '/ai-agent-course/',  // 替换为你的仓库名
  // ...其他配置
})
```

> 如果使用自定义域名（如 `slides.example.com`），`base` 设为 `'/'` 即可。

### 2. 添加 GitHub Actions 工作流

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - id: deployment
        uses: actions/deploy-pages@v4
```

### 3. 开启 GitHub Pages

1. 进入仓库页面 → **Settings** → 左侧 **Pages**
2. **Source** 选择 **GitHub Actions**
3. 点击 **Save**

### 4. 触发部署

1. 将上面的改动提交并 push 到 `main` 分支
2. 进入仓库 → **Actions** 标签，可以看到工作流正在运行
3. 等待完成（约 1–2 分钟），状态变绿即成功
4. 访问 `https://<username>.github.io/<repo-name>/`

## 自定义域名（可选）

1. 在 `dist` 目录会被覆盖，所以在 `public/` 目录下创建 `CNAME` 文件，内容为你的域名：
   ```
   slides.example.com
   ```
2. 将域名的 DNS CNAME 记录指向 `<username>.github.io`
3. 在仓库 **Settings** → **Pages** → **Custom domain** 中填入域名
4. 勾选 **Enforce HTTPS**（GitHub 自动签发证书，等待几分钟生效）
5. 将 `vite.config.ts` 中的 `base` 改回 `'/'`

## 常见问题

**页面空白或资源 404**
→ 检查 `vite.config.ts` 的 `base` 是否与仓库名一致（注意前后都要有 `/`）。

**Actions 运行失败**
→ 进入 **Actions** → 点击失败的运行记录查看日志。常见原因是 TypeScript 类型错误，修复后重新 push 即可。

**Pages 设置里没有 GitHub Actions 选项**
→ 确认仓库是 Public 的，或者你有 GitHub Pro/Team/Enterprise 计划（Private 仓库需要付费计划才能使用 Pages）。
