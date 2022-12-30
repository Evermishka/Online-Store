import Control from '../../../common/control';
import { CartDataItem, State } from '../../../common/state';

export class CartSummary extends Control {
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'summary');
    new Control(this.node, 'p', 'summary_title', 'Summary');
    let productsAmount = state
      .getData('cartData')
      .reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
    const summaryProductsAmount = new Control(
      this.node,
      'p',
      'summary_amount',
      `Products: ${productsAmount.toString()}`
    );
    let totalPrice = state
      .getData('cartData')
      .reduce((accum: number, current: CartDataItem) => accum + current.price, 0);
    const summaryTotalPrice = new Control(this.node, 'p', 'summary_price', `Total: €${totalPrice}.00`);
    state.onUpdate.add((type) => {
      if (type === 'cartData') {
        let newPrice = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.price, 0);
        let newAmount = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
        summaryProductsAmount.node.textContent = `Products: ${newAmount.toString()}`;
        summaryTotalPrice.node.textContent = `Total: €${newPrice}.00`;
      }
    });
    const promo = new Control(this.node, 'div', 'promo', 'Promocode block');
    // TODO Add promo code component
    const buyButton = new Control(this.node, 'button', 'cart_buy-button', 'Buy now');
    // TODO Add modal
  }
}