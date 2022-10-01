<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  width: number;
  vif: boolean;
}>();

const computedWidth = computed(() => (props.vif ? props.width : 0));
</script>

<template>
  <div class="shrink-content" :style="{ width: `${computedWidth}px` }">
    <Transition name="shrink">
      <div v-if="vif">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.shrink-content {
  transition: width 0.7s;
}

.shrink-enter-active,
.shrink-leave-active {
  transition: opacity 0.7s;
}

.shrink-leave-from,
.shrink-enter-to {
  opacity: 1;
}

.shrink-leave-to,
.shrink-enter-from {
  opacity: 0;
}
</style>
