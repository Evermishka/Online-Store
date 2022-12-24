import CartState, { CartData } from '../../../../common/cart-state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';

export class GoodsItem extends Control {
  id: number;
  onProductPage!: (id: number) => void;

  constructor(parendNode: HTMLElement, product: Product, state: CartState) {
    super(parendNode, 'li', 'goods_product', '');
    this.id = product.id;
    new Control(this.node, 'p', 'goods_product_title', product.title);
    const imageWrapper = new Control(this.node, 'div', 'goods_product_image-wrapper', '');
    const image: { node: HTMLImageElement } = new Control(imageWrapper.node, 'img', 'goods_product_image', '');
    image.node.src = product.thumbnail;
    image.node.width = 200;
    new Control(this.node, 'p', 'goods_product_rate', `Rating: ${product.rating.toString()}`);
    new Control(this.node, 'p', 'goods_product_price', `Price: $${product.price.toString()}`);
    const cartButtonText = (state.getData().find(el => el.id === product.id)) ? 'Remove from cart' : 'Add to cart';
    const cartButton: { node: HTMLButtonElement } = new Control(
      this.node,
      'button',
      'goods_product_button',
      cartButtonText
    );
    cartButton.node.onclick = (): void => {
      if (cartButton.node.innerText === 'Add to cart') {
        cartButton.node.innerText = 'Remove from cart';
        this.addToCart({
          id: product.id,
          price: product.price,
          amount: 1
        }, state);
      } else {
        cartButton.node.innerText = 'Add to cart';
        this.removeFromCart({
          id: product.id,
          price: product.price,
          amount: 1
        }, state);
      }

    };
    const detailsButton: { node: HTMLButtonElement } = new Control(
      this.node,
      'button',
      'goods_product_button',
      'Details'
    );
    detailsButton.node.onclick = () => this.onProductPage(this.id);
  }

  addToCart(productInfo: CartData, state: CartState): void {
    state.setData(productInfo);
    console.log(state);
  }
  removeFromCart(productInfo: CartData, state: CartState): void {
    state.deleteData(productInfo);
    console.log(state);
  }
}
