<script setup lang="ts">
import { inject } from "vue";
import { globalStateKey } from "./Keys.js";

const globalState = inject(globalStateKey);
</script>

<template>
  <div
    class="page-card__container"
    :style="{
      transform: `translateY(-${globalState?.pageOffset}vh)`,
      marginBottom: `-${globalState?.pageOffset}vh`,
    }"
  >
    <div class="page-card">
      <slot name="page"></slot>
    </div>
  </div>
</template>

<style lang="scss">
.page-card__container {
  width: 100%;
  transition: transform 0.7s;
}

.page-card {
  box-sizing: border-box;
  background-color: #fff;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5em;
  padding: 48px 96px;
  z-index: 200;
  box-shadow: 0 12px 15px 0 rgb(0 0 0 / 24%), 0 17px 50px 0 rgb(0 0 0 / 19%);
}

@media (max-width: 767px) {
  .page-card {
    padding: 3rem 1.5rem;
  }
}
</style>
