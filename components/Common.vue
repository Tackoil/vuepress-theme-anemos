<template>
  <Header/>
  <HeadPic ref="headpicRef" :src="headpic"/>
  <PageCard>
    <template #page>
      <slot name="page">

      </slot>
    </template>
  </PageCard>

</template>

<script setup lang="ts">
import {usePageData, usePageFrontmatter} from "@vuepress/client";
import Header from "./Header.vue";
import HeadPic from './HeadPic.vue';
import PageCard from './PageCard.vue';
import type {AnemosFrontmatter, AnemosThemeData} from "../types";
import {computed, reactive} from "@vue/reactivity";
import {useThemeData} from "@vuepress/plugin-theme-data/lib/client";
import {onMounted, provide, watch} from "vue";
import {onScroll} from "../utils/events";

const pageFrontmatter = usePageFrontmatter<AnemosFrontmatter>();
const themeData = useThemeData<AnemosThemeData>();

const globalState = reactive({
  scrollTop: 0,
  onBottom: false,
  pageOffset: 0,
})

provide('globalState', globalState);

const pageData = usePageData();

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
    return "https://tackoil.github.io/img/bg/natsumi23.jpg";
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


</script>

<style lang="scss">
@import "../assets/css/global.scss";
@import "../assets/css/iconfont.css";

:root {
  --nprogress-color: rgba(109, 175, 164, 0.9);
  --nprogress-z-index: 1031;
}

</style>
