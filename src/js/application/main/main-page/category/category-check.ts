import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { products, Product } from '../../../../data/data';

export class CategoryCheckbox extends Control {
  constructor(parentNode: HTMLElement, type: string, state: State) {
    super(parentNode, 'div', 'category_checkbox', '');

    const categoryCheckboxTitle = new Control(this.node, 'h3', 'category_checkbox_title', '');
    if (type === 'category') {
      categoryCheckboxTitle.node.textContent = 'Category';
    } else if (type === 'brand') {
      categoryCheckboxTitle.node.textContent = 'Brand';
    }
    const categoryCheckboxList = new Control(this.node, 'ul', 'category_checkbox_list', '');

    const productsValue: { [key: string]: number } = {};

    const categories = products.forEach((it: Product) => {
      if (type === 'category') {
        if (productsValue[it.category] === undefined) {
          productsValue[it.category] = 1;
        } else {
          productsValue[it.category] += 1;
        }
      } else if (type === 'brand') {
        if (productsValue[it.brand] === undefined) {
          productsValue[it.brand] = 1;
        } else {
          productsValue[it.brand] += 1;
        }
      }
    });

    for (let key in productsValue) {
      const categoryItem = new Control(categoryCheckboxList.node, 'li', 'category_item', ``);
      const categoryItemBlock = new Control(categoryItem.node, 'div', 'category_item_block', '');
      const categoryLabel = new Control(categoryItemBlock.node, 'label', 'category_item_label', '');
      const categoryRadio: { node: HTMLInputElement } = new Control(categoryLabel.node, 'input', 'category_item_radio');
      categoryRadio.node.type = 'checkbox';
      categoryRadio.node.onclick = () => {
        if (categoryRadio.node.checked) {
          this.addGoods(key, state, type);
        } else {
          this.removeGoods(key, state, type);
        }
      };
      const customCheckbox = new Control(categoryLabel.node, 'span', 'category_custom_check');
      const categoryItemName = new Control(categoryLabel.node, 'p', 'category_item_text', `${key}`);
      const categoryItemCount = new Control(
        categoryItemBlock.node,
        'p',
        'category_item_count',
        `${productsValue[key]}/${productsValue[key]}`
      );
    }
  }

  addGoods(product: string, state: State, type: string) {
    state.setData(product, type === 'category' ? 'category' : 'brand');
    console.log(state);
  }

  removeGoods(product: string, state: State, type: string) {
    state.deleteData(product, type === 'category' ? 'category' : 'brand');
    console.log(state);
  }
}
