import { debounce } from "lodash-es";

export function onScroll(fn: (e: Event) => void): void {
  window.addEventListener("scroll", debounce(fn, 10));
}
