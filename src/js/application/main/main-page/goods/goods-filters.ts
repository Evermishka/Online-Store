import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';

export class GoodsFilters extends Control {
  changeSize!: (size: number) => void;
  sortOptions: Array<string> = [
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
        const selectItemFirst: { node: HTMLOptGroupElement } = new Control(
          inputSort.node,
          'option',
          'goods_filter_option',
          'Sort options:'
        );
        selectItemFirst.node.disabled = true;
      }
      const inputSortItem: { node: any } = new Control(
        inputSort.node,
        'option',
        'goods_filter_option',
        `${this.sortOptions[i]}`
      );
      inputSortItem.node.value = this.sortOptions[i];
      inputSort.node.onchange = (e: Event) => this.sortByParam(e, state);
    }

    const foundSort: { node: HTMLElement } = new Control(this.node, 'p', 'goods_filter_count', 'Found: 100');
    foundSort.node.textContent = `Found: ${state.getData('sortGoods').length || products.length}`;

    const goodsFiltersUpdate = (type: string) => {
      if (type === 'sortGoods') {
        foundSort.node.textContent = `Found: ${state.getData('sortGoods').length}`;
      }
      if (type === 'resetFilters') {
        searchSort.node.value = state.getData('sortSearch');
      }
    };

    state.onUpdate.add(goodsFiltersUpdate);
    // TODO delete any type;
    const searchSort: any = new Control(this.node, 'input', 'goods_filter_search');
    searchSort.node.type = 'search';
    searchSort.node.placeholder = 'Search product';
    searchSort.node.oninput = () => this.sortBySearch(searchSort.node.value, state);
    searchSort.node.value = state.getData('sortSearch');

    const goodsBlockBtn = new Control(this.node, 'div', 'goods_btns_block');
    const btnSize = new Control(goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-1');
    btnSize.node.onclick = () => this.changeSize(1);
    const btnSize1 = new Control(goodsBlockBtn.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-2');
    btnSize1.node.onclick = () => this.changeSize(2);
  }

  private sortBySearch(value: string, state: State) {
    state.setData(value, 'sortSearch');
  }

  private sortByParam(event: Event, state: State) {
    // TODO delete any type;
    let target: any = event.target;
    let targetValue: string = target.value;
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
