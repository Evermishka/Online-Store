import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { CategoryItem } from './category-item';

export class Category extends Control {
  constructor(parentNode: HTMLElement, products: Array<Product>) {
    super(parentNode, 'div', 'category', '');
    const categoryBlock = new Control(this.node, 'div', 'category_block');
    const btnResetFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Reset Filter');
    const btnCopyFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Copy Filter');

    const categoryCheckbox = new Control(categoryBlock.node, 'div', 'category_checkbox');
    const categoryCheckboxTitle = new Control(categoryCheckbox.node, 'h3', 'category_checkbox_title', 'Category');

    const categories = Array.from(
      new Set(
        products.reduce((acc: Array<string>, el: Product) => {
          acc.push(el.category);
          return acc;
        }, [])
      )
    );
    categories.forEach((it: string) => {
      new Control(categoryCheckbox.node, 'li', 'category_item', `${it}`);
    });

    const brandCheckbox = new Control(categoryBlock.node, 'div', 'category_brand');
    const brandCheckboxTitle = new Control(brandCheckbox.node, 'h3', 'category_brand_title', 'Brand');
    const brand = Array.from(
      new Set(
        products.reduce((acc: Array<string>, el: Product) => {
          acc.push(el.brand);
          return acc;
        }, [])
      )
    );
    brand.forEach((it: string) => {
      new Control(brandCheckbox.node, 'li', 'category_item', `${it}`);
    });

    const priceBlock = new Control(categoryBlock.node, 'div', 'category_price');
    const priceBlockTitle = new Control(priceBlock.node, 'h3', 'category_price_title', 'Price');
    const priceValueBlock = new Control(priceBlock.node, 'div', 'category_price_value');
    const minPriceValue = new Control(priceValueBlock.node, 'p', 'category_price_min', '0');
    const maxPriceValue = new Control(priceValueBlock.node, 'p', 'category_price_man', '100');
    const priceInput = new Control(priceBlock.node, 'input', 'category_input');

    const stockBlock = new Control(categoryBlock.node, 'div', 'category_price');
    const stockBlockTitle = new Control(stockBlock.node, 'h3', 'category_price_title', 'Stock');
    const stockValueBlock = new Control(stockBlock.node, 'div', 'category_price_value');
    const minStockValue = new Control(stockValueBlock.node, 'p', 'category_price_min', '0');
    const maxStockValue = new Control(stockValueBlock.node, 'p', 'category_price_man', '100');
    const stockInput = new Control(stockBlock.node, 'input', 'category_input');
  }
}
