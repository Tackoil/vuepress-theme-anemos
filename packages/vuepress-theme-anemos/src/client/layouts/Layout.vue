<script setup lang="ts">
import { usePageData } from "@vuepress/client";
import Common from "../components/Common.vue";
import HomePage from "./HomePage.vue";
import LinksPage from "./LinksPage.vue";
import PostPage from "./PostPage.vue";

const pageData = usePageData();
</script>

<template>
  <Common>
    <template #page>
      <HomePage v-if="pageData.path === '/'"> </HomePage>
      <LinksPage v-else-if="pageData.path === '/links.html'"> </LinksPage>
      <PostPage v-else></PostPage>
    </template>
  </Common>
</template>

<style lang="scss"></style>
