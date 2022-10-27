import { defineUserConfig } from "vuepress";
import { anemosTheme } from "vuepress-theme-anemos";

export default defineUserConfig({
  title: "vuepress-theme-anemos",
  base: "/vuepress-theme-anemos/",
  theme: anemosTheme({
    navs: [
      { name: "Home", path: "/", icon: "icon-home" },
      { name: "About", path: "/about", icon: "icon-user" },
      { name: "Links", path: "/links", icon: "icon-link" },
    ],
    subtitle: "風のように",
  }),
  head: [
    ["link", { rel: "icon", href: "/assets/avatar.png" }],
    ["link", { rel: "apple-touch-icon", href: `/assets/avatar.png` }],
  ],
});
