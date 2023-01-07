import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';
import { GoodsFilters } from './goods-filters';

export class Goods extends Control {
  onProductPage!: (id: number) => void;
  goodsList!: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, products: Array<Product>, state: State) {
    super(parentNode, 'div', 'goods');
    const goodFilters = new GoodsFilters(this.node, state, products);

    this.createGoods(this.node, products, state);

    state.onUpdate.add((type) => {
      if (type === 'sortGoods') {
        this.goodsList.destroy();
        this.createGoods(this.node, state.getData('sortGoods'), state);
      }
    });
  }

  createGoods(parentNode: HTMLElement, data: Array<Product>, state: State) {
    this.goodsList = new Control(parentNode, 'ul', 'goods_list');
    const products = data.map((el) => new GoodsItem(this.goodsList.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));
  }
}
