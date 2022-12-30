import Control from '../../../common/control';
import { CartDataItem, State } from '../../../common/state';
import { Product } from '../../../data/data';

export class CartProductListControls extends Control {
  constructor(parentNode: HTMLElement, state: State, productData: Product) {
    super(parentNode, 'div', 'products-list_controls');
    const decreaseAmountButton = new Control(this.node, 'button', 'products-list_decrease-button', '-');
    //TODO Add decreaseAmountButton actions
    let productAmountNumber: number = state
      .getData('cartData')
      .find((el: CartDataItem) => el.id === productData.id).amount;
    const productAmount = new Control(this.node, 'p', 'products-list_product-amount', productAmountNumber.toString());
    //TODO Add state.onUpdate
    const increaseAmountButton = new Control(this.node, 'button', 'products-list_increase-button', '+');
    //TODO Add increaseAmountButton actions
  }
}
