import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';

export class Goods extends Control {
  onProductPage!: (id: number) => void;
  constructor(parendNode: HTMLElement, data: Array<Product>, state: State) {
    super(parendNode, 'ul', 'goods');
    const products = data.map((el) => new GoodsItem(this.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));
  }
}
