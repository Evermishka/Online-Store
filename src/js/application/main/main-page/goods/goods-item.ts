import Control from '../../../../common/control';
import { Product } from '../../../../data/data';

export class GoodsItem extends Control {
  id: number;
  onProductPage!: (id: number) => void;

  constructor(parendNode: HTMLElement, product: Product) {
    super(parendNode, 'li', 'goods_product', '');
    this.id = product.id;
    new Control(this.node, 'p', 'goods_product_title', product.title);
    const imageWrapper = new Control(this.node, 'div', 'goods_product_image-wrapper', '');
    const image: { node: HTMLImageElement } = new Control(imageWrapper.node, 'img', 'goods_produc_image', '');
    image.node.src = product.thumbnail;
    image.node.width = 200;
    new Control(this.node, 'p', 'goods_product_rate', `Rating: ${product.rating.toString()}`);
    new Control(this.node, 'p', 'goods_product_price', `Price: $${product.price.toString()}`);
    const cartButton: { node: HTMLButtonElement } = new Control(
      this.node,
      'button',
      'goods_product_button',
      'Add to cart'
    );
    cartButton.node.onclick = (): void => {
      this.toggleCart(product.id);
    };
    const detailsButton: { node: HTMLButtonElement } = new Control(
      this.node,
      'button',
      'goods_product_button',
      'Details'
    );
    detailsButton.node.onclick = () => this.onProductPage(this.id);
  }

  toggleCart(id: number): void {
    throw new Error('Method not implemented.');
  }
}
