<template>
    <div class="links-container">
        <div v-for="link in pageFrontmatter.links" class="link-card" @click="jumpTo(link.link)">
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

<script setup lang="ts">
import { usePageFrontmatter } from "@vuepress/client";
import alterAvatarUrl from "../assets/img/alter_avatar.jpg";
import type { AnemosFrontmatter } from "../../types";

const pageFrontmatter = usePageFrontmatter<AnemosFrontmatter>();

function jumpTo(link) {
    window.open(link, '_blank');
}

function fallback(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = alterAvatarUrl;
    img.onerror = null;
}

</script>

<style lang="scss" scoped>
@import '../assets/css/variable';

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
    transition: all 0.7s;

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