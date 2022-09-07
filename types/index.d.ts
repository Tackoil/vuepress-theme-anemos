import type { ThemeData } from "@vuepress/plugin-theme-data"

type AnemosLink = {
    title: string,
    intro?: string,
    link: string,
    avatar?: string
}

type AnemosConfig = {
    navs: { name: string, path: string, icon: string }[],
    subtitle: string,
    headpic?: string,
    indent?: boolean,
}

type AnemosThemeData = ThemeData<AnemosConfig>

type AnemosFrontmatter = {
    title: string,
    date: string,
    description: string,
    headpic?: string,
    indent?: boolean,
    desp?: string,
    links?: AnemosLink[]
}
