import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { Main } from '../../main';
import { ProductPage } from '../../product-page/product-page';

export class GoodsItem extends Control {
  id: number;
  public onProductPage(id: number) {
    //console.log(id);
  }

  constructor(parendNode: HTMLElement, product: Product) {
    super(parendNode, 'li', 'product', '');
    this.id = product.id;
    new Control(this.node, 'p', 'product__title', product.title);
    const imageWrapper = new Control(this.node, 'div', 'product__image-wrapper', '');
    const image: { node: HTMLImageElement } = new Control(imageWrapper.node, 'img', 'product__image', '');
    image.node.src = product.thumbnail;
    image.node.width = 200;
    new Control(this.node, 'p', 'product__rate', `Rating: ${product.rating.toString()}`);
    new Control(this.node, 'p', 'product__price', `Price: $${product.price.toString()}`);
    const cartButton: { node: HTMLButtonElement } = new Control(this.node, 'button', 'product__button', 'Add to cart');
    cartButton.node.onclick = (): void => {
      this.toggleCart(product.id);
    };
    const detailsButton: { node: HTMLButtonElement } = new Control(this.node, 'button', 'product__button', 'Details');
    detailsButton.node.onclick = (): void => this.onProductPage(this.id);
  }  


  toggleCart(id: number): void {
    throw new Error('Method not implemented.');
  }
}
