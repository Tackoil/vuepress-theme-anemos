import type { App } from "vuepress";

export async function generatePostList(app: App): Promise<void> {
  const result: any[] = [];
  app.pages
    .filter(
      (page: { data: { path: string } }) =>
        ["/", "/links.html", "/about.html", "/404.html"].indexOf(
          page.data.path
        ) === -1
    )
    .filter((page) => !page.frontmatter.hide)
    .sort(
      (a, b) =>
        (b.frontmatter.date.valueOf() as number) -
        (a.frontmatter.date.valueOf() as number)
    )
    .forEach((page: { data: any }) => result.push(page.data));
  await app.writeTemp(
    "postList.js",
    `export const postList = ${JSON.stringify(result)}`
  );
}
