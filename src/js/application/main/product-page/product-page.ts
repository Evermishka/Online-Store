import Control from '../../../common/control';

export class ProductPage extends Control {
  constructor(parendNode: HTMLElement, id: number | undefined) {
    super(parendNode, 'div', 'product_page', '');
    console.log(id);

    this.node.textContent = `ID product is ${id}`;
  }
}
