import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { themeDataPlugin } from "@vuepress/plugin-theme-data";
import { getDirname, path } from "@vuepress/utils";
import type { Theme } from "vuepress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { generatePostList } from "./node/utils.js";
import type { AnemosConfig, AnemosThemeData } from "./types/index.js";

const __dirname = getDirname(import.meta.url);

export const anemosTheme = ({ navs, subtitle }: AnemosConfig): Theme => {
  return {
    name: "vuepress-theme-anemos",
    clientConfigFile: path.resolve(__dirname, "client/client.js"),
    plugins: [
      themeDataPlugin({
        themeData: {
          navs,
          subtitle,
        } as AnemosThemeData,
      }),
      nprogressPlugin(),
      mdEnhancePlugin({
        // @ts-expect-error Tex is not included in mdEnhancePlugin
        tex: true,
        footnote: true,
      }),
      shikiPlugin(),
    ],
    onPrepared: (app) => {
      generatePostList(app);
    },
  };
};
