import _ from "lodash";

export function onScroll(fn: (e: Event) => void): void {
  window.addEventListener("scroll", _.debounce(fn, 10));
}
