import Control from '../../../common/control';
import { CartDataItem, State, StateOptions } from '../../../common/state';
import { promoCodes } from '../../../data/promo-codes';
import { CartModal } from './purchase/cart-modal';
import { PromoCodes } from './cart-promo-codes';

export class CartSummary extends Control {
  private summaryProductsAmount: Control<HTMLElement>;
  private summaryTotalPrice!: Control<HTMLElement>;
  private summaryTotalPriceNew!: Control<HTMLElement>;
  public closeCart!: () => void;

  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'summary');
    const summaryBlock = new Control(this.node, 'div', 'summary_inner');
    new Control(summaryBlock.node, 'p', 'summary_title', 'Summary');
    const productsAmount = this.calculateAmount(state);
    this.summaryProductsAmount = new Control(
      summaryBlock.node,
      'p',
      'summary_amount',
      `Products: ${productsAmount.toString()}`
    );
    this.renderTotalSum(state, summaryBlock);
    const promo = new PromoCodes(summaryBlock.node, state);
    promo.changeTotalSum = (): void => this.renderTotalSum(state, summaryBlock);
    const buyButton = new Control(summaryBlock.node, 'button', 'cart_button', 'BUY NOW');
    buyButton.node.onclick = (): void => {
      const cartModal = new CartModal(this.node);
      cartModal.closeModal = (): void => cartModal.destroy();
      cartModal.closeCart = (): void => this.closeCart();
    };

    state.onUpdate.add((type: keyof StateOptions): void => {
      if (type === 'cartData' || type === 'promoData') {
        const newAmount = this.calculateAmount(state);
        const newPrice = this.calculatePrice(state);
        const newDiscountPrice = this.calculateDiscountPrice(state.getData('promoData') as Array<string>, newPrice);
        this.summaryProductsAmount.node.textContent = `Products: ${newAmount.toString()}`;
        this.summaryTotalPrice.node.textContent = `Total: €${newPrice}.00`;
        if (newDiscountPrice > 0) {
          this.summaryTotalPriceNew.node.textContent = `Total: €${newDiscountPrice}.00`;
        } else {
          this.summaryTotalPriceNew.node.textContent = '';
        }
      }
    });
  }

  private calculateAmount(state: State): number {
    const cartData = state.getData('cartData') as CartDataItem[];
    return cartData.reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
  }
  private calculatePrice(state: State): number {
    const cartData = state.getData('cartData') as CartDataItem[];
    return cartData.reduce((accum: number, current: CartDataItem) => accum + current.price * current.amount, 0);
  }
  private calculateDiscountPrice(data: string[], price: number): number {
    const totalDiscount = data.reduce((acum, el) => {
      const promoCode = promoCodes.find((elem) => elem.name === el);
      if (promoCode) return acum + promoCode.discount;
      return 0;
    }, 0);
    return Math.round(price - (price / 100) * totalDiscount);
  }
  private renderTotalSum(state: State, innerNode: { node: HTMLElement }): void {
    if (!this.summaryTotalPrice) {
      const totalPrice = this.calculatePrice(state);
      this.summaryTotalPrice = new Control(innerNode.node, 'p', 'summary_price', `Total: €${totalPrice}.00`);
      this.summaryTotalPriceNew = new Control(innerNode.node, 'p', 'summary_price-new', '');
    }
    this.renderDiscountSum(state, this.calculatePrice(state));
  }
  private renderDiscountSum(state: State, price: number): void {
    const appliedCodesData = state.getData('promoData') as string[];
    if (appliedCodesData.length > 0) {
      const totalPriceNew = this.calculateDiscountPrice(appliedCodesData, price);
      this.summaryTotalPrice.node.style.textDecoration = 'line-through';
      this.summaryTotalPriceNew.node.textContent = `Total: €${totalPriceNew}.00`;
      this.summaryTotalPriceNew.node.style.display = 'block';
    } else {
      this.summaryTotalPrice.node.style.textDecoration = 'none';
      this.summaryTotalPriceNew.node.style.display = 'none';
      this.summaryTotalPriceNew.node.textContent = '';
    }
  }
}
