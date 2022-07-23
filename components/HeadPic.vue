<template>
  <div class="head-pic" ref="headpicContainer" :style="{transform: `translateY(${picOffset}px)`}">
    <div class="head-pic__title" :style="{transform: `translateY(-${globalState.pageOffset / 2}vh)`}"> {{pageData.title}} </div>
    <div class="head-pic__mask"></div>
    <transition name="slide">
      <img :src="src" class="head-pic__pic" :key="src" :style="{filter: `blur(${blurCount}px)`}"/>
    </transition>

  </div>
</template>

<script setup lang="ts">
import {computed} from '@vue/reactivity';
import {inject} from 'vue';
import {usePageData} from "@vuepress/client";


type Props = {
  src: string,
}
const props = defineProps<Props>();

const globalState = inject('globalState')

const pageData = usePageData();

const blurCount = computed(() => {
  const start = 30;
  const end =  window.innerHeight;
  const maxCount = 20;
  if (globalState.scrollTop < start) {
    return 0;
  } else if (globalState.scrollTop > end) {
    return maxCount;
  } else {
    return (globalState.scrollTop - start) / (end - start) * maxCount;
  }
})

const picOffset =  computed(() => {
  const minCount = 0;
  const maxCount = 64;
  const start = 0;
  const end = window.innerHeight * maxCount / 100;
  if (globalState.scrollTop < start) {
    return 0;
  } else if (globalState.scrollTop > end) {
    return maxCount;
  } else {
    return (globalState.scrollTop - start) / (end - start) *
        (maxCount - minCount) + minCount;
  }
})


</script>

<style lang="scss">
.head-pic {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: height .7s;
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
    color: #EEE;
    z-index: 10;
    transition: transform .7s;
  }

  .head-pic__mask {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
  }

  .head-pic__pic {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1; // for transform behind the parent box
  }


}

.slide-enter-active, .slide-leave-active {
  transition: all .7s;
}

.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}

.slide-enter-from {
  transform: translateY(50%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateY(0);
  opacity: 1;
}


</style>
