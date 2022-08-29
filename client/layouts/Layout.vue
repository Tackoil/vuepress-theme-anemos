<template>
  <Common>
    <template #page>
      <HomePage v-if="pageData.path === '/'"> </HomePage>
      <LinksPage v-else-if="pageData.path === '/links.html'"> </LinksPage>
      <PostPage v-else></PostPage>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from '../components/Common.vue';
import {usePageData} from "@vuepress/client";
import HomePage from "./HomePage.vue";
import PostPage from "./PostPage.vue";
import LinksPage from './LinksPage.vue';

const pageData = usePageData();

</script>

<style lang="scss">

</style>
