---
title: vuepress-theme-anemos demo
date: 2022-09-26
headpic: 'https://wonder-egg-priority.com/assets/img/top/main/visual.jpg'
desp: vuepress-theme-anemos 的测试用例
---

> 本文档用来测试 Anemos 的各个功能，主要参考自 [gungnir](https://github.com/Renovamen/vuepress-theme-gungnir)

# Anemos DEMO

## Paragraphs

《奇蛋物语 / WONDER EGG PRIORITY》（日语：ワンダーエッグ・プライオリティ，简称ワンエグ）是由[CloverWorks](https://zh.moegirl.org.cn/CloverWorks)制作的一部原创动画。[^1]

2020年10月9日，宣布本作制作决定，并同时公开前导PV以及STAFF。由曾任《101次求婚》《高校教师》《一个屋檐下》等部作品的日本编剧**野岛伸司**为原案及剧本的动画作品。野岛伸司亦于动画消息公开同时，在官网处留言表示*在跳脱墨守成规的电视剧创作框架后，这次在动画世界体验到久违的乐趣*。==动画于2021年1月12日~3月30日播出。全12回。==~~2021年3月31日宣布，第12回的后续「WONDER EGG PRIORITY 特别篇」于6月29日播出。~~

## H2 Heading

### H3 Heading

#### H4 Heading

##### H5 Heading

###### H6 Heading

⬆️ 比正文文本还小的标题

## list

### ordered list

1. 1
2. 1
3. 2
4. 3
5. 5
6. 8

### unordred list

- 2
- 3
- 5
- 7
- 11
- 13

## Code

### Code Blocks

```javascript
// core/Axios.js
  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) { // 过滤
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous; // 判断是否都为同步

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected); // 注意顺序：unshift
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected); // 注意顺序：push
  });
```

### Inline Code

调用 `Promise.resolve() 函数`，生成一个 `Promise` 对象。

## Table

| Name | Info |
|------|------|
| vuepress-theme-gungnir | Gungnir is a blog theme for Vuepress 2. |
| vuepress-theme-anemos | Anemos is another blog theme for Vuepress 2. |


## Images

![Image Example](https://tackoil.github.io/headpics/bupt_mann.png)


## Maths

Inline math: $e^{i\pi} + 1 = 0$

Display math:

$$
R(q) = \left[ 
\begin{matrix}
1-2y^2-2z^2 & 2xy - 2zw & 2xz + 2yw \\
2xy + 2zw & 1-2x^2-2z^2 & 2yz-2xw \\
2xz-2yw & 2yz+2xw & 1-2x^2-2y^2 \\
\end{matrix}
 \right]
$$

With tags:

$$
\begin{gather}
  A = \text{softmax}(\frac{QK^T}{\sqrt{d_k}}) \\
  F_{\text{out}} = A V
\end{gather}
$$


## Emojis

:laughing: :point_right:

[^1]: [动画官网](https://wonder-egg-priority.com/)