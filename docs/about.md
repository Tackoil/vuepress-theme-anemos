---
title: vuepress-theme-anemos README
date: 2022-09-26
headpic: 'https://wonder-egg-priority.com/assets/img/top/main/visual.jpg'
desp: vuepress-theme-anemos 的想法与未来
---

> 一款流畅的 vuepress 主题。

# vuepress-theme-anemos

vuepress-theme-anemos 是一款流畅的 vuepress 主题。致力于充分利用单页面应用（SPA）的优势，设计一个动效流畅的个人博客模版，方便博主专注于博客内容的编写。

Anemos 来自于[《WONDER EGG PRIORITY》](https://wonder-egg-priority.com/)特别篇中的插曲，同时也有风神的含义。~~（但不推荐观看这部动画，尤其是特别篇。）~~

## 是与不是

### 是
- **是**一个动效流畅、布局简洁的 vuepress 主题
- **是**一个充分发挥单页面应用特性的主题
- **是**一个对 ACGN 爱好者相对友好的主题

### 不是
- **不是**一个功能丰富的主题
- **不是**一个纯文本的主题
- **不是**一个动效花哨的主题

## 开始开发

### 运行环境

> 以下运行环境仅为作者开发时所使用环境，不代表其他版本无法运行。

- OS: macOS 12.6 (M1)
- Node.js: v16.17.0
- pnpm: 7.11.0

### 依赖管理

依赖管理请使用 pnpm 包管理器进行。如需要添加新包，请手动完成 peer dependencies 的安装，以保证相关依赖可以在 `package.json` 中**保留记录**。

```bash
pnpm install
```

### 开发

目前的开发方式可能导致无法在网页中显式观察到 TypeScript 的编译错误。开发过程中务必留意命令行中的报错。

```bash
pnpm dev
```

### 编译

```bash
pnpm build
```

### 部署

```bash
pnpm deploy
```

## 开发计划

- [ ] 功能：深色模式
- [ ] 功能：头图信息
- [ ] 样式：图片单击放大
- [ ] 功能：调色板
- [ ] 样式：自动获取头图颜色

……

> 其他功能建议可直接在 issue 部分提出，但是否采纳主要取决于上述对本主题的描述，~~以及作者心情~~。

## 参考

本主题开发过程主要使用和参考了以下主题或项目，感谢各位。

- [fluid-dev/hexo-theme-fluid](https://github.com/fluid-dev/hexo-theme-fluid)
- [vuepress-theme-hope/vuepress-theme-hope/md-enhance](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/md-enhance/)
- [vuepress-reco/hexo-theme-reco](https://github.com/vuepress-reco/vuepress-theme-reco)


