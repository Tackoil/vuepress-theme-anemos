<script setup lang="ts">
import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { computed, onMounted, provide, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import type { AnemosFrontmatter, AnemosThemeData } from "../../types/index.js";
import { onScroll } from "../utils/events.js";
import { scrollTo } from "../utils/motion.js";
import Header from "./Header.vue";
import HeadPic from "./HeadPic.vue";
import { globalStateKey } from "./Keys.js";
import PageCard from "./PageCard.vue";
import Tail from "./Tail.vue";

const pageFrontmatter = usePageFrontmatter<AnemosFrontmatter>();
const themeData = useThemeData<AnemosThemeData>();
const pageData = usePageData();

const router = useRouter();

const globalState = reactive({
  scrollTop: 0,
  onBottom: false,
  pageOffset: 0,
});

provide(globalStateKey, globalState);

function isTop(): void {
  globalState.scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
}

onMounted(() => {
  onScroll(isTop);
  setPageOffset();
  router.beforeEach((from, to, next) => {
    scrollTo(0, next);
  });
});

const headpic = computed(() => {
  if (pageFrontmatter.value.headpic) {
    return pageFrontmatter.value.headpic;
  } else if (themeData.value.headpic) {
    return themeData.value.headpic;
  } else {
    return "https://wonder-egg-priority.com/assets/img/top/main/visual.jpg";
  }
});

const pageTitle = computed(() => {
  if (pageData.value.title && pageData.value.path !== "/") {
    return pageData.value.title;
  } else if (themeData.value.subtitle) {
    return themeData.value.subtitle;
  } else {
    return "";
  }
});

function setPageOffset(): void {
  if (pageData.value.path === "/") {
    globalState.pageOffset = 0;
  } else if (pageData.value.path === "/about.html") {
    globalState.pageOffset = 40;
  } else {
    globalState.pageOffset = 20;
  }
}

watch(() => pageData.value.path, setPageOffset);

// async function setThemeColor() {
//   const color = await colorfulImg(headpic.value);
//   console.log(color);
//   document.body.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`
// }
// watch(() => headpic.value, setThemeColor);
</script>

<template>
  <Header />
  <HeadPic ref="headpicRef" :src="headpic" :title="pageTitle" />
  <PageCard>
    <template #page>
      <slot name="page"> </slot>
    </template>
  </PageCard>
  <Tail />
</template>

<style lang="scss">
@import "../assets/css/global";
@import "../assets/css/iconfont.css";
@import "../assets/css/variable";

body {
  transition: background-color 0.7s;
}

:root {
  --nprogress-color: $main-color;
  --nprogress-z-index: 1031;
}
</style>
