import Control from '../../common/control';
import logo from '../../../assets/svg/logo.svg';
import { CartDataItem, State } from '../../common/state';

export class Header extends Control {
  public onMainPage!: () => void;
  public onCartPage!: () => void;
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'header', 'header', '');

    const headerInner = new Control(this.node, 'div', 'header_inner', '');
    const headerLogo: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_logo', '');
    headerLogo.node.src = logo;
    headerLogo.node.alt = 'image logo';
    headerLogo.node.onclick = (): void => this.onMainPage();

    const headerSumBlock = new Control(headerInner.node, 'div', 'header_inner_sum', '');
    new Control(headerSumBlock.node, 'span', 'header_sum_text', 'Cart total');

    const cartData = state.getData('cartData') as CartDataItem[];
    const headerSumNumber: number = cartData.reduce(
      (accum: number, current: CartDataItem) => accum + current.price * current.amount,
      0
    );
    const headerSum = new Control(headerSumBlock.node, 'span', 'header_sum', `€${headerSumNumber}.00`);

    const headerCartItemsNumber: number = cartData.reduce(
      (accum: number, current: CartDataItem) => accum + current.amount,
      0
    );
    const headerCart = new Control(headerInner.node, 'div', 'header_cart', '');
    const headerCartItems = new Control(headerCart.node, 'p', 'header_cart-items', headerCartItemsNumber.toString());
    headerCart.node.onclick = (): void => this.onCartPage();

    state.onUpdate.add((type: string): void => {
      if (type === 'cartData') {
        const cartData = state.getData('cartData') as CartDataItem[];
        const newPrice = cartData.reduce(
          (accum: number, current: CartDataItem) => accum + current.price * current.amount,
          0
        );
        const newAmount = cartData.reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
        headerSum.node.textContent = `€${newPrice}.00`;
        headerCartItems.node.textContent = newAmount.toString();
      }
    });
  }
}
