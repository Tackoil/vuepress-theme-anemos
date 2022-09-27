import type { InjectionKey } from "vue";

export const globalStateKey = Symbol("globalStateKey") as InjectionKey<{
  scrollTop: number;
  onBottom: boolean;
  pageOffset: number;
}>;
