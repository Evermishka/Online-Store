import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';

export class GoodsFilters extends Control {
  public changeSize!: (size: number) => void;
  private sortOptions: Array<string> = [
    'Sort by price ASC',
    'Sort by price DESC',
    'Sort by rating ASC',
    'Sort by rating DESC',
    'Sort by discount ASC',
    'Sort by discount DESC',
  ];
  constructor(parentNode: HTMLElement, state: State, products: Array<Product>) {
    super(parentNode, 'div', 'goods_filter');
    const inputSort: { node: HTMLSelectElement } = new Control(this.node, 'select', 'goods_filter_select');
    for (let i = 0; i < this.sortOptions.length; i++) {
      if (i === 0) {
        const selectItemFirst: { node: HTMLOptionElement } = new Control(
          inputSort.node,
          'option',
          'goods_filter_option',
          'Sort options:'
        );
        selectItemFirst.node.disabled = true;
      }
      const inputSortItem: { node: HTMLOptionElement } = new Control(
        inputSort.node,
        'option',
        'goods_filter_option',
        `${this.sortOptions[i]}`
      );
      inputSortItem.node.value = this.sortOptions[i];
      inputSort.node.onchange = (e: Event): void => this.sortByParam(e, state);
    }

    const foundSort: { node: HTMLElement } = new Control(this.node, 'p', 'goods_filter_count', 'Found: 100');
    foundSort.node.textContent = `Found: ${(state.getData('sortGoods') as Array<Product>).length || products.length}`;

    state.onUpdate.add((type) => {
      if (type === 'sortGoods') {
        foundSort.node.textContent = `Found: ${(state.getData('sortGoods') as Array<Product>).length}`;
      }
      if (type === 'resetFilters') {
        searchSort.node.value = state.getData('sortSearch') as string;
      }
    });
    const searchSort: { node: HTMLInputElement } = new Control(this.node, 'input', 'goods_filter_search');
    searchSort.node.type = 'search';
    searchSort.node.placeholder = 'Search product';
    searchSort.node.oninput = (): void => this.sortBySearch(searchSort.node.value, state);
    searchSort.node.value = state.getData('sortSearch') as string;

    const goodsBlockBtn = new Control(this.node, 'div', 'goods_btns_block');
    const btnSize = new Control(goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-1');
    btnSize.node.onclick = (): void => this.changeSize(1);
    const btnSize1 = new Control(goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-2');
    btnSize1.node.onclick = (): void => this.changeSize(2);
  }

  private sortBySearch(value: string, state: State): void {
    state.setData(value, 'sortSearch');
  }

  private sortByParam(event: Event, state: State): void {
    // TODO delete any type;
    const target = event.target as HTMLOptionElement;
    const targetValue: string = target.value;
    const result: { isSort: boolean; sortType: null | string; sortValue: null | string } = {
      isSort: false,
      sortType: null,
      sortValue: null,
    };

    switch (targetValue) {
      case 'Sort by price ASC':
        result.isSort = true;
        result.sortType = 'ASC';
        result.sortValue = 'price';
        state.setData(result, 'sortOptions');
        break;
      case 'Sort by price DESC':
        result.isSort = true;
        result.sortType = 'DESC';
        result.sortValue = 'price';
        state.setData(result, 'sortOptions');
        break;
      case 'Sort by rating ASC':
        result.isSort = true;
        result.sortType = 'ASC';
        result.sortValue = 'rating';
        state.setData(result, 'sortOptions');
        break;
      case 'Sort by rating DESC':
        result.isSort = true;
        result.sortType = 'DESC';
        result.sortValue = 'rating';
        state.setData(result, 'sortOptions');
        break;
      case 'Sort by discount ASC':
        result.isSort = true;
        result.sortType = 'ASC';
        result.sortValue = 'discountPercentage';
        state.setData(result, 'sortOptions');
        break;
      case 'Sort by discount DESC':
        result.isSort = true;
        result.sortType = 'DESC';
        result.sortValue = 'discountPercentage';
        state.setData(result, 'sortOptions');
        break;
      default:
        result.isSort = false;
        result.sortType = null;
        result.sortValue = null;
        state.setData(result, 'sortOptions');
        return;
    }
  }
}
