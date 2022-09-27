// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * https://juejin.cn/post/6844903678231445512
 * @param img
 */
export function colorfulImg(img: string): Promise<any> {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext && canvas.getContext("2d");
  let height;
  let width;
  let length;
  let data;
  let i = -4;
  const blockSize = 5;
  let count = 0;

  const image = new Image();
  const p = new Promise((resolve) => {
    image.onload = function (this: HTMLImageElement) {
      height = canvas.height = this.naturalHeight;
      width = canvas.width = this.naturalWidth;
      context.drawImage(this, 0, 0);
      data = context.getImageData(0, 0, width, height).data;
      length = data.length;
      const rgb = { r: 0, g: 0, b: 0 };
      while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data[i];
        rgb.g += data[i + 1];
        rgb.b += data[i + 2];
      }
      rgb.r = ~~(rgb.r / count);
      rgb.g = ~~(rgb.g / count);
      rgb.b = ~~(rgb.b / count);
      resolve(rgb);
    };
  });

  image.src = img;
  return p;
}
