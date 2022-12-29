import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';
import { GoodsFilters } from './goods-filters';

export class Goods extends Control {
  onProductPage!: (id: number) => void;
  constructor(parendNode: HTMLElement, data: Array<Product>, state: State) {
    super(parendNode, 'div', 'goods');
    const goodFilters = new GoodsFilters(this.node);
    const goodsList = new Control(this.node, 'ul', 'goods_list');
    const products = data.map((el) => new GoodsItem(goodsList.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));
  }
}
