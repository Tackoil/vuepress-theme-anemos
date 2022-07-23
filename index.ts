import { path } from '@vuepress/utils'
import { themeDataPlugin } from '@vuepress/plugin-theme-data'
import type { AnemosConfig, AnemosThemeData } from './types'
import {nprogressPlugin} from "@vuepress/plugin-nprogress";

export const anemosTheme = ({
    navs
}: AnemosConfig) => {
    return {
        name: 'vuepress-theme-anemos',
        layouts: path.resolve(__dirname, 'layouts'),
        plugins: [
            themeDataPlugin({
                themeData: {
                    navs
                } as AnemosThemeData
            }),
            nprogressPlugin(),
        ]
    }
}
