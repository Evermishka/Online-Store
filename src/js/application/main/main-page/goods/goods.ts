import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';

export class Goods extends Control {
  onProductPage!: (id: number) => void;

  constructor(parendNode: HTMLElement, data: Array<Product>) {
    super(parendNode, 'ul', 'goods');
    const products = data.map((el) => new GoodsItem(this.node, el));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));
  }
}
