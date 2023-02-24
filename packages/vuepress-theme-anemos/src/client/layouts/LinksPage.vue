<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import type { AnemosFrontmatter } from "../../types/index.js";
import alterAvatarUrl from "../assets/img/alter_avatar.jpg";

const pageFrontmatter = usePageFrontmatter<AnemosFrontmatter>();

function jumpTo(link): void {
  const a = document.createElement("a");
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.click();
}

function fallback(event: Event): void {
  const img = event.target as HTMLImageElement;
  img.src = alterAvatarUrl;
  img.onerror = null;
}
</script>

<template>
  <div class="links-container">
    <div
      v-for="link in pageFrontmatter.links"
      :key="link.title"
      class="link-card"
      @click="jumpTo(link.link)"
    >
      <img class="link-card__img" :src="link.avatar" @error="fallback" />
      <div class="link-card__text">
        <div class="link-card__text__title">
          {{ link.title }}
        </div>
        <div class="link-card__text__intro">
          {{ link.intro }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/variable";

.links-container {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 10px;
}

.link-card {
  display: flex;
  height: 48px;
  margin: 8px;
  padding: 32px 8px;
  border-radius: 0.25rem;
  transition: all 0.3s;

  &:hover {
    background-color: $background-dim-color;
  }

  &__img {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    margin-right: 16px;
  }

  &__text {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    line-height: 1.5;

    &__title {
      font-weight: bold;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    &__intro {
      text-overflow: ellipsis;
      overflow: hidden;
      color: $text-dim-color;
      font-size: 0.85rem;
    }
  }
}
</style>
