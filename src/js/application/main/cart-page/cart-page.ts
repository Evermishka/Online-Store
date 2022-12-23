import Control from '../../../common/control';

export class CartPage extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'cart');
    this.node.textContent = 'Card page';
  }
}
