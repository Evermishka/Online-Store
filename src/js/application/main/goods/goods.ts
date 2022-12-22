import Control from '../../../common/control';
import { Product } from '../../../data/data';
import { GoodsItem } from './goods-item';

export class Goods extends Control {
  constructor(parendNode: HTMLElement, data: Array<Product>) {
    super(parendNode, 'ul', 'goods', '');
    data.forEach((el) => new GoodsItem(this.node, el));
  }
}
