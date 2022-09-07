<template>
  <div class="home-page">
    <PostCard v-for="post in postList" :key="post.path" :data="post"></PostCard>
  </div>
</template>

<script setup lang="ts">
import { postList } from '@temp/postList';
import PostCard from "../components/PostCard.vue";

</script>

<style lang="scss" scoped>

</style>