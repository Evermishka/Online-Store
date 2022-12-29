import Control from '../../../../common/control';

export class GoodsFilters extends Control {
  sortOptions: Array<string> = [
    'Sort by price ASC',
    'Sort by price DESC',
    'Sort by rating ASC',
    'Sort by rating DESC',
    'Sort by discount ASC',
    'Sort by discount DESC',
  ];
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'goods_filter');

    const inputSort: { node: HTMLElement } = new Control(this.node, 'select', 'goods_filter_select', 'Sort options:');
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
      const inputSortItem = new Control(inputSort.node, 'option', 'goods_filter_option', `${this.sortOptions[i]}`);
    }
    const foundSort: { node: HTMLElement } = new Control(this.node, 'p', 'goods_filter_count', 'Found: 100');
    const searchSort: { node: HTMLInputElement } = new Control(this.node, 'input', 'goods_filter_search');
    searchSort.node.placeholder = 'Search product';
    const btnSize = new Control(this.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-1');
    const btnSize1 = new Control(this.node, 'button', 'goods_btn_size goods_btn_size_1', 'size-2');
  }
}
