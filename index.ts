import { path } from '@vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
// @ts-ignore
import type { AnemosConfig, AnemosThemeData } from './types'
import {nprogressPlugin} from "@vuepress/plugin-nprogress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import {generatePostList} from "./node/utils";

export const anemosTheme = ({
    navs,
    subtitle
}: AnemosConfig) => {
    return {
        name: 'vuepress-theme-anemos',
        layouts: path.resolve(__dirname, 'client/layouts'),
        plugins: [
            themeDataPlugin({
                themeData: {
                    navs,
                    subtitle
                } as AnemosThemeData
            }),
            nprogressPlugin(),
            mdEnhancePlugin({
                tex: true,
                footnote: true,
            }),
        ],
        onPrepared: (app) => {
            generatePostList(app);
        }
    }
}
