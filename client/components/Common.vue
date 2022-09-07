<template>
  <Header/>
  <HeadPic ref="headpicRef" :src="headpic" :title="pageTitle"/>
  <PageCard>
    <template #page>
      <slot name="page">

      </slot>
    </template>
  </PageCard>
  <Tail />
</template>

<script setup lang="ts">
import {usePageData, usePageFrontmatter, withBase} from "@vuepress/client";
import Header from "./Header.vue";
import HeadPic from './HeadPic.vue';
import PageCard from './PageCard.vue';
import Tail from './Tail.vue';
import type {AnemosFrontmatter, AnemosThemeData} from "../../types";
import {computed, reactive} from "@vue/reactivity";
import {useThemeData} from "@vuepress/plugin-theme-data/client";
import {onMounted, provide, watch,} from "vue";
import {onScroll} from "../utils/events";
import {colorfulImg} from "../utils/getThemeColor";
import { useRouter } from "vue-router";

const pageFrontmatter = usePageFrontmatter<AnemosFrontmatter>();
const themeData = useThemeData<AnemosThemeData>();
const pageData = usePageData();

const globalState = reactive({
  scrollTop: 0,
  onBottom: false,
  pageOffset: 0,
})

provide('globalState', globalState);

function isTop() {
  globalState.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
}

onMounted(() => {
  onScroll(isTop);
  setPageOffset();
})

const headpic = computed(() => {
  if (pageFrontmatter.value.headpic) {
    return pageFrontmatter.value.headpic;
  } else if (themeData.value.headpic) {
    return themeData.value.headpic
  } else {
    return "https://tackoil.github.io/headpics/natsumi2.3.jpg";
  }
})

const pageTitle = computed(() => {
  if (pageData.value.title && pageData.value.path !== '/') {
    return pageData.value.title;
  } else if (themeData.value.subtitle) {
    return themeData.value.subtitle;
  } else {
    return "";
  }
})

function setPageOffset() {
  if (pageData.value.path === '/') {
    globalState.pageOffset = 0;
  } else if (pageData.value.path === '/about.html') {
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

<style lang="scss">
@import "../assets/css/global";
@import "../assets/css/iconfont.css";
@import "../assets/css/variable";

body {
  transition: background-color .7s;
}

:root {
  --nprogress-color: $main-color;
  --nprogress-z-index: 1031;
}

</style>
