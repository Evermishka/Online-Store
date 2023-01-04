import Control from '../../../common/control';
import { CartDataItem, State } from '../../../common/state';
import { promoCodes } from '../../../data/promo-codes';
import { PromoCodes } from './cart-promo-codes';

export class CartSummary extends Control {
  private totalPrice: number;
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
    this.totalPrice = state
      .getData('cartData')
      .reduce((accum: number, current: CartDataItem) => accum + current.price * current.amount, 0);
    const summaryTotalPrice = new Control(this.node, 'p', 'summary_price', `Total: €${this.totalPrice}.00`);
    const summaryTotalPriceNew = new Control(this.node, 'p', 'summary_price-new', '');
    summaryTotalPriceNew.node.style.display = 'none';
    state.onUpdate.add((type) => {
      if (type === 'cartData') {
        let newPrice = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.price * current.amount, 0);
        let newAmount = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
        summaryProductsAmount.node.textContent = `Products: ${newAmount.toString()}`;
        summaryTotalPrice.node.textContent = `Total: €${newPrice}.00`;
      }
    });
    const promo = new PromoCodes(this.node, state);
    promo.changeTotalSum = () => this.changeTotalSum(summaryTotalPrice.node, summaryTotalPriceNew.node, state);

    const buyButton = new Control(this.node, 'button', 'cart_buy-button', 'Buy now');
    // TODO Add modal
  }

  private changeTotalSum(total: HTMLElement, totalNew: HTMLElement, state: State): void {
    const appliedCodesData: Array<string> = state.getData('promoData');
    if (appliedCodesData.length > 0) {
      const totalDiscount = appliedCodesData.reduce((acum, el) => {
        const promoCode = promoCodes.find((elem) => elem.name === el);
        if (promoCode) return acum + promoCode.discount;
        return 0;
      }, 0);
      const totalPriceNew = this.totalPrice - (this.totalPrice / 100) * totalDiscount;
      total.style.textDecoration = 'line-through';
      totalNew.style.display = 'block';
      totalNew.textContent = `Total: €${totalPriceNew}`;
    } else {
      total.style.textDecoration = 'none';
      totalNew.style.display = 'none';
    }
  }
}
