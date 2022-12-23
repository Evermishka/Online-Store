import Control from '../../../common/control';

export class ProductPage extends Control {
  constructor(parendNode: HTMLElement) {
    super(parendNode, 'div', 'product_page', '');
    this.node.textContent = 'ProductPage'
  }
}
