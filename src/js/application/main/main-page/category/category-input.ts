import Control from '../../../../common/control';
import { Product, products } from '../../../../data/data';

export class CategoryInput extends Control {
  constructor(parentNode: HTMLElement, type: string) {
    super(parentNode, 'div', 'category_price');

    const inputBlockTitle = new Control(this.node, 'h3', 'category_price_title');
    if (type === 'price') {
      inputBlockTitle.node.textContent = 'Price';
    } else if (type === 'stock') {
      inputBlockTitle.node.textContent = 'Stock';
    }
    const inputValueBlock = new Control(this.node, 'div', 'category_price_value');
    const maxPrice = products.reduce((acc: number, it: Product) => {
      if (type === 'price') {
        if (it.price > acc) {
          acc = it.price;
        }
      } else if (type === 'stock') {
        if (it.stock > acc) {
          acc = it.stock;
        }
      }

      return acc;
    }, 0);

    const minPrice = products.reduce((acc: number, it: Product) => {
      if (type === 'price') {
        if (it.price < acc) {
          acc = it.price;
        }
      } else if (type === 'stock') {
        if (it.stock < acc) {
          acc = it.stock;
        }
      }

      return acc;
    }, maxPrice);
    const minInputValue = new Control(inputValueBlock.node, 'p', 'category_price_min', `€${minPrice}`);

    const maxInputValue = new Control(inputValueBlock.node, 'p', 'category_price_man', `€${maxPrice}`);

    const priceInput: any = new Control<HTMLInputElement>(this.node, 'input', 'category_input');
    priceInput.node.type = 'range';
  }
}
