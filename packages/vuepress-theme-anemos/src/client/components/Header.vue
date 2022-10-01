<script setup lang="ts">
import { useSiteData } from "@vuepress/client";
import { useThemeData } from "@vuepress/plugin-theme-data/client";
import { inject } from "vue";
import { useRouter } from "vue-router";
import type { AnemosThemeData } from "../../types/index.js";
import { useBreakpoints } from "../utils/hooks/media.js";
import { globalStateKey } from "./Keys.js";
import ShrinkTransition from "./Transitions/ShrinkTransition.vue";

const router = useRouter();

const siteData = useSiteData();

const themeData = useThemeData<AnemosThemeData>();

const globalState = inject(globalStateKey);

const { type } = useBreakpoints();

function jumpTo(url: string): void {
  router.push(url);
}
</script>

<template>
  <header
    class="nav-bar"
    :class="globalState.scrollTop !== 0 ? 'nav-bar--scroll' : ''"
  >
    <div class="nav-bar-container">
      <span class="nav-bar__title">{{ siteData.title }}</span>
      <div class="button-group">
        <button
          v-for="item in themeData.navs"
          :key="item.path"
          class="button-group__button"
          @click="jumpTo(item.path)"
        >
          <i :class="`iconfont ${item.icon}`" />
          <ShrinkTransition :width="40" :vif="type !== 'xs'">
            <span>{{ item.name }}</span>
          </ShrinkTransition>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "../assets/css/variable";

.nav-bar {
  position: fixed;
  z-index: 300;
  height: 55px;
  width: calc(100% - 20px);
  padding: 5px 10px;
  color: $text-white;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
  display: flex;
  align-items: center;
  transition: all 0.7s;

  .nav-bar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    .nav-bar__title {
      line-height: 40px;
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.button-group {
  display: flex;

  .button-group__button {
    height: 40px;
    color: inherit;
    display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 0 4px;

    .iconfont {
      font-size: 20px;
      margin: 0 4px;
    }
  }
}

.nav-bar--scroll {
  height: 40px;
  background: rgba(109, 175, 164);
  opacity: 0.9;
  backdrop-filter: blur(2px);
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  -webkit-box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%),
    0 2px 10px 0 rgb(0 0 0 / 12%);
}
</style>
