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
      .reduce((accum: number, current: CartDataItem) => accum + current.price, 0);
    const headerSum = new Control(headerSumBlock.node, 'span', 'header_sum', `€${headerSumNumber}.00`);
    state.onUpdate.add((data) => {
      let newAmount = data.reduce((accum: number, current: CartDataItem) => accum + current.price, 0);

      headerSum.node.innerText = `€${newAmount}.00`;
    });

    const headerCart: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_cart', '');
    headerCart.node.src = cartMenu;
    headerCart.node.alt = 'cart';
    headerCart.node.onclick = () => this.onCartPage();
  }
}
