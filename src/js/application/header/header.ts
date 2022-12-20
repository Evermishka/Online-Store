import Control from '../../common/control';

export class Header extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', 'header', '');
    const headerInner = new Control(this.node, 'div', 'header_inner', '');
    const headerLogo: { node: HTMLImageElement } = new Control(headerInner.node, 'img', 'header_logo', '');
    headerLogo.node.src = './assets/svg/logo.svg';
  }
}
