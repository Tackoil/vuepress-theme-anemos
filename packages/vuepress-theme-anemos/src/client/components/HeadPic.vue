<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from "vue";
import { globalStateKey } from "./Keys.js";

type Props = {
  src: string;
  title: string;
};
defineProps<Props>();

const globalState = inject(globalStateKey) as any;

const windowHeight = ref(0);

function updateHeight(): void {
  windowHeight.value = window.innerHeight;
}

onMounted(() => {
  updateHeight();
  window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeight);
});

const blurCount = computed(() => {
  const start = 30;
  const end = windowHeight.value;
  const maxCount = 20;
  if (globalState.scrollTop < start) {
    return 0;
  } else if (globalState.scrollTop > end) {
    return maxCount;
  } else {
    return ((globalState.scrollTop - start) / (end - start)) * maxCount;
  }
});

const picOffset = computed(() => {
  const minCount = 0;
  const maxCount = 64;
  const start = 0;
  const end = (windowHeight.value * maxCount) / 100;
  if (globalState.scrollTop < start) {
    return 0;
  } else if (globalState.scrollTop > end) {
    return maxCount;
  } else {
    return (
      ((globalState.scrollTop - start) / (end - start)) *
        (maxCount - minCount) +
      minCount
    );
  }
});
</script>

<template>
  <div
    ref="headpicContainer"
    class="head-pic"
    :style="{ transform: `translateY(${picOffset}px)` }"
  >
    <div
      class="head-pic__title"
      :style="{ transform: `translateY(-${globalState.pageOffset / 2}vh)` }"
    >
      {{ title }}
    </div>
    <div class="head-pic__mask"></div>
    <Transition name="slide">
      <div
        :key="src"
        class="head-pic__pic"
        :style="{
          filter: `blur(${blurCount}px)`,
          backgroundImage: `url(${src})`,
        }"
      />
    </Transition>
  </div>
</template>

<style lang="scss">
@import "../assets/css/variable";

.head-pic {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: height 0.7s;
  display: flex;
  align-items: center;

  .head-pic__title {
    font-size: 2em;
    max-width: calc(960px - 6rem);
    width: 80%;
    overflow-wrap: break-word;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: $text-white;
    z-index: 10;
    transition: transform 0.7s;
  }

  .head-pic__mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
  }

  .head-pic__pic {
    position: absolute;
    width: 104vw;
    margin-left: -2vw;
    height: 100vh;
    //object-fit: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    z-index: -1; // for transform behind the parent box
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s;
}

.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateY(50%);
  opacity: 0;
}

.slide-enter-from {
  transform: translateY(-50%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}
</style>
