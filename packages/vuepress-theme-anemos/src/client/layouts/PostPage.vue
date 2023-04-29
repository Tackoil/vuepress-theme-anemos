<script setup lang="ts">
import { usePageData } from "@vuepress/client";

const pageData = usePageData();
</script>

<template>
  <div class="post-title">{{ pageData.title }}</div>
  <Content class="markdown-body markdown-body--indent"></Content>
</template>

<style lang="scss">
@import "../assets/css/markdown";
@import "../assets/css/code.scss";

.post-title {
  font-size: 12px;
  text-align: center;
  color: var(--line-dim-color);
  border-bottom: 1px solid var(--line-dim-color);
  padding-bottom: 0.5rem;
  margin-top: -36px;
  margin-bottom: 48px;
}
</style>
