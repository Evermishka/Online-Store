import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { CartButton } from './cart-button';

export class GoodsItem extends Control {
  public onProductPage!: (id: number) => void;

  constructor(parendNode: HTMLElement, product: Product, state: State) {
    super(parendNode, 'li', 'goods_product', '');
    new Control(this.node, 'p', 'goods_product_title', product.title);
    const imageWrapper = new Control(this.node, 'div', 'goods_product_image-wrapper', '');
    const image: { node: HTMLImageElement } = new Control(imageWrapper.node, 'img', 'goods_product_image', '');
    image.node.src = product.thumbnail;
    image.node.width = 200;
    new Control(this.node, 'p', 'goods_product_rate goods_product_text', `Rating: ${product.rating}`);
    new Control(this.node, 'p', 'goods_product_price goods_product_text', `Price: €${product.price}.00`);
    new Control(this.node, 'p', 'goods_product_text', `Brand: ${product.brand}`);
    new Control(this.node, 'p', 'goods_product_text', `Stock: ${product.stock}`);
    new CartButton(this.node, product, state);
    const detailsButton: { node: HTMLButtonElement } = new Control(
      this.node,
      'button',
      'goods_product_button',
      'Details'
    );
    detailsButton.node.onclick = (): void => this.onProductPage(product.id);
  }
}
