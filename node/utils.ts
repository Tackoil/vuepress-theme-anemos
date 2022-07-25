export async function generatePostList(app) {
    const result = [];
    app.pages.filter(page => ['/', '/links.html', '/about.html', '/404.html'].indexOf(page.data.path) === -1)
        .sort((a, b) => a.date - b.date)
        .forEach(page => (result.push(page.data)));
    await app.writeTemp('postList.js', `export const postList = ${JSON.stringify(result)}`);
}