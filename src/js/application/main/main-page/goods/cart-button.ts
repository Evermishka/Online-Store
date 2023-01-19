import { CartDataItem, State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';

enum CartButtonText {
  add = 'Add to cart',
  remove = 'Remove from cart',
}

export class CartButton extends Control<HTMLButtonElement> {
  constructor(parendNode: HTMLElement, product: Product, state: State) {
    super(
      parendNode,
      'button',
      'goods_product_button',
      (state.getData('cartData') as Array<CartDataItem>).find((el: CartDataItem) => el.id === product.id)
        ? CartButtonText.remove
        : CartButtonText.add
    );
    this.node.onclick = (): void => {
      if (this.node.innerText === CartButtonText.add) {
        this.node.innerText = CartButtonText.remove;
        this.addToCart({ id: product.id, price: product.price, amount: 1 }, state);
      } else {
        this.node.innerText = CartButtonText.add;
        this.removeFromCart({ id: product.id, price: product.price, amount: 1 }, state);
      }
    };
  }

  public addToCart(productInfo: CartDataItem, state: State): void {
    state.setData(productInfo, 'cartData');
  }

  public removeFromCart(productInfo: CartDataItem, state: State): void {
    state.deleteData(productInfo, 'cartData');
  }
}
