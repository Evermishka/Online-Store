import Control from '../../../../common/control';
import { CartDataItem, State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { CartButton } from '../../main-page/goods/cart-button';

export class ProductPurchase extends Control {
  public onCartPage!: () => void;

  constructor(parendNode: HTMLElement, product: Product, state: State) {
    super(parendNode, 'div', 'product_purchase', '');
    new Control(this.node, 'p', 'product_price', `Price: €${product.price}.00`);
    const cartButton = new CartButton(this.node, product, state);
    const buyButton: { node: HTMLButtonElement } = new Control(this.node, 'button', 'goods_product_button', 'Buy now!');
    buyButton.node.onclick = (): void => {
      const cartData = state.getData('cartData') as Array<CartDataItem>;

      if (!cartData.find((el: CartDataItem) => el.id === product.id)) {
        cartButton.addToCart({ id: product.id, price: product.price, amount: 1 }, state);
      }
      this.onCartPage();
    };
    new Control(this.node, 'p', 'product_stock', `Stock: ${product.stock}`);
  }
}
