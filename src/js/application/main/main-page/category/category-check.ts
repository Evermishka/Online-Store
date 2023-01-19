import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { products, Product } from '../../../../data/data';

export class CategoryCheckbox extends Control {
  public filtration!: () => void;
  private listOfCounterEl: Array<HTMLElement> = [];
  private currentType!: string;
  private listOfCheckedEl: Array<HTMLElement> = [];
  constructor(parentNode: HTMLElement, type: string, state: State) {
    super(parentNode, 'div', 'category_checkbox', '');
    this.currentType = type;
    const categoryCheckboxTitle = new Control(this.node, 'h3', 'category_checkbox_title', '');
    if (type === 'category') {
      categoryCheckboxTitle.node.textContent = 'Category';
    } else if (type === 'brand') {
      categoryCheckboxTitle.node.textContent = 'Brand';
    }
    const categoryCheckboxList = new Control(this.node, 'ul', 'category_checkbox_list', '');

    const productsValue: { [key: string]: number } = {};

    products.forEach((it: Product) => {
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

    for (const key in productsValue) {
      const categoryItem = new Control(categoryCheckboxList.node, 'li', 'category_item', ``);
      const categoryItemBlock = new Control(categoryItem.node, 'div', 'category_item_block', '');
      const categoryLabel = new Control(categoryItemBlock.node, 'label', 'category_item_label', '');
      const categoryRadio: { node: HTMLInputElement } = new Control(categoryLabel.node, 'input', 'category_item_radio');
      categoryRadio.node.type = 'checkbox';
      this.listOfCheckedEl.push(categoryRadio.node);
      categoryRadio.node.onclick = (): void => {
        if (categoryRadio.node.checked) {
          this.addGoods(key, state, type);
        } else {
          this.removeGoods(key, state, type);
        }
      };
      new Control(categoryLabel.node, 'span', 'category_custom_check');
      new Control(categoryLabel.node, 'p', 'category_item_text', `${key}`);
      const categoryItemCount = new Control(
        categoryItemBlock.node,
        'p',
        'category_item_count',
        `${productsValue[key]}/${productsValue[key]}`
      );

      this.listOfCounterEl.push(categoryItemCount.node);
    }

    state.onUpdate.add((type: string): void => {
      if (type === 'resetFilters') {
        this.listOfCheckedEl.forEach((el) => {
          (el as HTMLInputElement).checked = false;
        });
      }
      if (type === 'sortCount') {
        const getCounts = state.getData('sortCount') as {
          category: { [key: string]: number };
          brand: { [key: string]: number };
        };
        let counter = 0;
        for (const key in productsValue) {
          if (this.currentType === 'category') {
            this.listOfCounterEl[counter].textContent = `${getCounts.category[key]}/${productsValue[key]}`;
          } else if (this.currentType === 'brand') {
            this.listOfCounterEl[counter].textContent = `${getCounts.brand[key]}/${productsValue[key]}`;
          }
          counter++;
        }
      }
    });
  }

  private addGoods(product: string, state: State, type: string): void {
    state.setData(product, type);
    this.filtration();
  }

  private removeGoods(product: string, state: State, type: string): void {
    state.deleteData(product, type);
    this.filtration();
  }
}
