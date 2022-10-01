// https://stackoverflow.com/questions/71204095/vue-js-get-screen-size-like-css-media-queries

import type { ComputedRef } from "vue";
import { computed, onMounted, onUnmounted, ref } from "vue";

export function useBreakpoints(): {
  width: ComputedRef<number>;
  type: ComputedRef<"xs" | "md" | "lg">;
} {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = (): void => {
    windowWidth.value = window.innerWidth;
  };
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 767) return "xs";
    if (windowWidth.value >= 767 && windowWidth.value < 1200) return "md";
    if (windowWidth.value >= 1200) return "lg";
    return null; // This is an unreachable line, simply to keep eslint happy.
  });

  const width = computed(() => windowWidth.value);

  return { width, type };
}
