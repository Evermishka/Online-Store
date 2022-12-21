import Control from '../../common/control';

export class Header extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header', '');

    const headerInner = new Control(this.node, 'div', 'header_inner', '');
    const headerLogo: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_logo', '');
    headerLogo.node.src = '../../assets/svg/logo.svg';
    headerLogo.node.alt = 'image logo';

    const headerSumBlock = new Control(headerInner.node, 'div', 'header_inner_sum', '');
    const headerSumText = new Control(headerSumBlock.node, 'span', 'header_sum_text', 'Cart total');
    const headerSum = new Control(headerSumBlock.node, 'span', 'header_sum', '€0.00');

    const headerCart: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_logo', '');
    headerCart.node.src = '';
    headerCart.node.alt = 'cart';
  }
}
