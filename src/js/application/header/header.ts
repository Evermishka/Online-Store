import Control from '../../common/control';
import logo from '../../../assets/svg/logo.svg';
import cartMenu from '../../../assets/images/cart.png';
import { CartDataItem, State } from '../../common/state';

export class Header extends Control {
  onMainPage!: () => void;
  onCartPage!: () => void;
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'header', 'header', '');

    const headerInner = new Control(this.node, 'div', 'header_inner', '');
    const headerLogo: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_logo', '');
    headerLogo.node.src = logo;
    headerLogo.node.alt = 'image logo';
    headerLogo.node.onclick = () => this.onMainPage();

    const headerSumBlock = new Control(headerInner.node, 'div', 'header_inner_sum', '');
    const headerSumText = new Control(headerSumBlock.node, 'span', 'header_sum_text', 'Cart total');

    let headerSumNumber: number = state
      .getData('cartData')
      .reduce((accum: number, current: CartDataItem) => accum + current.price * current.amount, 0);
    const headerSum = new Control(headerSumBlock.node, 'span', 'header_sum', `€${headerSumNumber}.00`);

    let headerCartItemsNumber: number = state
      .getData('cartData')
      .reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
    const headerCart = new Control(headerInner.node, 'div', 'header_cart', '');
    const headerCartItems = new Control(headerCart.node, 'p', 'header_cart-items', headerCartItemsNumber.toString());
    headerCart.node.onclick = () => this.onCartPage();

    const headerUpdate = (type: string) => {
      if (type === 'cartData') {
        let newPrice = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.price * current.amount, 0);
        let newAmount = state
          .getData('cartData')
          .reduce((accum: number, current: CartDataItem) => accum + current.amount, 0);
        headerSum.node.textContent = `€${newPrice}.00`;
        headerCartItems.node.textContent = newAmount.toString();
      }
    };

    state.onUpdate.add(headerUpdate);
  }
}
