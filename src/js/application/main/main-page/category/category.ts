import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { CategoryCheckbox } from './category-check';
import { CategoryInput } from './category-input';

export class Category extends Control {
  constructor(parentNode: HTMLElement, products: Array<Product>, state: State) {
    super(parentNode, 'div', 'category', '');
    const categoryBlock = new Control(this.node, 'div', 'category_block');
    const btnResetFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Reset Filter');
    const btnCopyFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Copy Filter');

    const categoryCheck = new CategoryCheckbox(categoryBlock.node, 'category', state);
    const categoryPrice = new CategoryCheckbox(categoryBlock.node, 'brand', state);

    const categoryInputPrice = new CategoryInput(categoryBlock.node, 'price', state);
    const categoryInputStock = new CategoryInput(categoryBlock.node, 'stock', state);
  }
}
