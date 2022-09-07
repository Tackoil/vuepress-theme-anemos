import { getDirname, path } from '@vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
// @ts-ignore
import type { AnemosConfig, AnemosThemeData } from './types'
import {nprogressPlugin} from "@vuepress/plugin-nprogress";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import {generatePostList} from "./node/utils";

const __dirname = getDirname(import.meta.url)

export const anemosTheme = ({
    navs,
    subtitle
}: AnemosConfig) => {
    return {
        name: 'vuepress-theme-anemos',
        clientConfigFile: path.resolve(__dirname, 'client/client.ts'),
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
