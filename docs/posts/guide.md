---
title: vuepress-theme-anemos 快速上手
date: 2022-09-26
headpic: 'https://wonder-egg-priority.com/assets/img/top/main/visual.jpg'
description: 快速开始使用 vuepress-theme-anemos
---

# 快速开始

> 你也可以直接参考本仓库的方式安装本主题。

## 安装

在期望工程中安装 [vuepress](https://v2.vuepress.vuejs.org/zh/) 和 [本主题](https://github.com/Tackoil/vuepress-theme-anemos)。

```bash
pnpm install -D vuepress@next vuepress-theme-anemos
```

## 工程目录设置

在工程中新建文件夹，作为存放博客文档。这里以`docs`为例。

```bash
mkdir docs
```

在博客文档文件夹下新建如下目录结构。其中，除尖括号`<>`包围的部分外，各目录和文件的名称请**保持一致**。

```bash
.
├── .vuepress
│   └── config.ts
├── README.md
├── about.md
└── posts
    └── <somepost>.md
```

- `.vuepress/config.ts`：博客的配置文件，详见[Vuepress配置](https://v2.vuepress.vuejs.org/zh/reference/config.html)
- `README.md` ：博客首页的占位符，在frontmatter中可以配置首页头图。
- `about.md` ：博客的关于页面，若不需要可以在配置文件中删除。
- `posts/<somepost>.md`：博客文章，可以在`posts`文件夹中添加任意数量文章。

## 博客配置

打开 `.vuepress/config.ts`，调整博客配置（可以直接复制如下内容）。

```typescript
import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  title: "vuepress-theme-anemos",
  theme: anemosTheme({
    navs: [
      { name: "Home", path: "/", icon: "icon-home" },
      { name: "About", path: "/about", icon: "icon-user" },
    ],
    subtitle: "風のように",
  })
});

```

- `title`：博客名称，将出现在首页标题栏、页面顶栏。
- `theme`：选择博客主题，建议选择`vuepress-theme-anemos`。~~当然，不喜欢的话也可以安装其他主题。~~
    - `navs`：导航栏配置，可以设置名字、路径和图标。
    - `subtitle`：副标题，将出现在首页头图中间。

## 编写与构建

在 `package.json` 中的 `scripts` 中加入以下内容：

```json
  "scripts": {
    "docs:dev": "vuepress dev docs --clean-cache",
    "docs:build": "vuepress build docs --clean-cache"
  }
```

### 编写

在项目根目录执行 `pnpm run docs:dev`，就可以在浏览器中实时查看编辑中的博客。

==注意：新添加的博客文章需要重启开发服务器，即`Ctrl+C`后`pnpm run docs:dev`==（这个可以算是开发bug，应该后续会修复）

### 构建

在项目根目录执行 `pnpm run docs:build`，即开始打包流程。默认的构建输出目录为 `.vuepress/dist`

# 主题配置

## 副标题【必填】

副标题将显示在主页头图中间。一般可作为介绍性文字使用。

```typescript{6}
import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  theme: anemosTheme({
    subtitle: "風のように",
  })
});

```

## 导航栏【必填】

导航栏将显示在页面顶栏右侧的按钮组。

- `name`：文字，在顶栏按钮旁显示。
- `path`：路径，与`posts/`目录**外**的markdown文件关联。
  - 例如：文件`outpost.md`对应的`path`为：`/outpost`
- `icon`：图标，目前只有下面实例中的四种。（后续会考虑其他方案）


```typescript{7-10}
import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  theme: anemosTheme({
    navs: [
      { name: 'Home', path: "/", icon: "icon-home"},
      { name: 'Categories', path: "/categories", icon: "icon-appstore"},
      { name: 'About', path: "/about", icon: "icon-user"},
      { name: 'Links', path: "/links", icon: "icon-link"},
    ],
  })
});

```

## 头图

头图是打开网页显示的第一张图片。也可以在 frontmatter 中设置每一篇博客文章对应的头图。

```typescript{6}
import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  theme: anemosTheme({
    headpic: "https://wonder-egg-priority.com/assets/img/top/main/visual.jpg",
  })
});

```

<!-- ## 全局缩进

是否在所有段落中启用首行缩进。这可能更符合中文排版样式。默认为 `true`。

```typescript{6}
import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  theme: anemosTheme({
    indent: true,
  })
});

``` -->

# 内容

本主题主要分为四种页面，可能会后续添加其他页面。识别页面种类主要通过 `path` 实现。（后续可能会调整成更合理的方式）

- `/`：主页，写在 markdown 正文的内容将完全忽略。
- `/links`：友链，写在 markdown 正文的内容将完全忽略。
- `/about`：关于，文章卡片会更加靠上，正文的内容会正常展示。
- 其他：正常页面。


本主题涵盖了 [VuePress2 - 指南 - Markdown](https://v2.vuepress.vuejs.org/zh/guide/markdown.html) 的功能。如这部分功能存在异常，请提 [issue](https://github.com/Tackoil/vuepress-theme-anemos/issues) 告诉我们。此外，本主题使用了部分 [Markdown Enhance](https://vuepress-theme-hope.github.io/v2/md-enhance/) 中的功能。具体为：

- TeX公式，采用了 katex。[md-enhance / TeX](https://vuepress-theme-hope.github.io/v2/md-enhance/guide/tex.html)
- 高亮。[md-enhance / Markup](https://vuepress-theme-hope.github.io/v2/md-enhance/guide/mark.html)
- 角标。[md-enhance / Footnote](https://vuepress-theme-hope.github.io/v2/md-enhance/guide/footnote.html)


## Frontmatter

frontmatter 一般用来记录一些额外信息。在本主题中 frontmatter 也会用来控制一部分页面中的样式。

```markdown
---
title: vuepress-theme-anemos 快速上手
date: 2022-09-26
headpic: 'https://wonder-egg-priority.com/assets/img/top/main/visual.jpg'
desp: 快速开始使用 vuepress-theme-anemos
---
```

- `title`【必填】：文章标题
- `date`【必填】：时间，会根据该时间对文章进行排序
- `description`【必填】：描述内容，将出现在首页文章卡片中。
- `headpic`：头图，将出现在首页文章卡片中与文章页的头图中，如不指定则默认使用主题配置中的头图。
- `links`：友链，该字段只在友链页面下生效
  - `title`：友链卡片标题【必填】
  - `intro`：友链卡片简短介绍
  - `link`：友链链接
  - `avatar`：友链头像【必填】
