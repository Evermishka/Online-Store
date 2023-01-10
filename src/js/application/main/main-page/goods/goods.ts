import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';
import { GoodsFilters } from './goods-filters';

export class Goods extends Control {
  onProductPage!: (id: number) => void;
  goodsList!: Control<HTMLElement>;
  isEmptyGoods!: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, products: Array<Product>, state: State) {
    super(parentNode, 'div', 'goods');
    const goodFilters = new GoodsFilters(this.node, state, products);
    goodFilters.changeSize = (size: number) => {
      this.goodsList.destroy();
      this.createGoods(
        this.node,
        state.getData('sortGoods').length > 0 ? state.getData('sortGoods') : products,
        state,
        size
      );
    };

    this.createGoods(this.node, products, state);

    state.onUpdate.add((type) => {
      if (type === 'sortGoods') {
        this.goodsList.destroy();
        this.createGoods(this.node, state.getData('sortGoods'), state);
      }
      if (type === 'isEmpty') {
        let isGoods = state.getData('isEmpty');
        if (isGoods) {
          if (this.isEmptyGoods) {
            this.isEmptyGoods.destroy();
          }
          this.isEmptyGoods = new Control(this.node, 'p', 'goods_empty_text', 'No products found');
        } else {
          if (this.isEmptyGoods) {
            this.isEmptyGoods.destroy();
          }
        }
      }
    });
  }

  createGoods(parentNode: HTMLElement, data: Array<Product>, state: State, size: number = 1) {
    this.goodsList = new Control(parentNode, 'ul', 'goods_list');
    if (size === 1) {
      this.goodsList.node.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
      this.goodsList.node.style.gridTemplateColumns = 'repeat(5, 1fr)';
    }
    const products = data.map((el) => new GoodsItem(this.goodsList.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));
  }
}
