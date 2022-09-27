<script setup lang="ts">
import { postList } from "@temp/postList";
import PostCard from "../components/PostCard.vue";
</script>

<template>
  <div class="home-page">
    <PostCard v-for="post in postList" :key="post.path" :data="post"></PostCard>
  </div>
</template>

<style lang="scss" scoped></style>
