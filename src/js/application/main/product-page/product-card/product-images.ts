import Control from '../../../../common/control';

const IMAGE_WIDTH = 400;
const CONTROL_WIDTH = 50;

export class ProductImages extends Control {
  constructor(parendNode: HTMLElement, images: Array<string>) {
    super(parendNode, 'div', 'product_images', '');
    const productImage: { node: HTMLImageElement } = new Control(this.node, 'img', 'product_image');
    productImage.node.src = images[0];
    productImage.node.width = IMAGE_WIDTH;
    const productImageControls = new Control(this.node, 'div', 'product_image-controls');
    images.forEach((el) => {
      const productImageControl: { node: HTMLImageElement } = new Control(
        productImageControls.node,
        'img',
        'product_image-control'
      );
      productImageControl.node.src = el;
      productImageControl.node.width = CONTROL_WIDTH;
      productImageControl.node.tabIndex = 0;
      productImageControl.node.onclick = () => {
        productImage.node.src = el;
      };
    });
  }
}
