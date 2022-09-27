declare module "*.vue" {
  import type { ComponentOptions } from "vue";
  const comp: ComponentOptions;
  export default comp;
}

declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
