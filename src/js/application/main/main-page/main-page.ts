import Control from '../../../common/control';
import { Category } from './category/category';
import { Product } from '../../../data/data';
import { Goods } from './goods/goods';
import { products } from '../../data/data';

export class MainPage extends Control {
  constructor(parendNode: HTMLElement, data: Array<Product>) {
    super(parendNode, 'div', 'main-page', '');
    const category = new Category(this.node);
    const goods = new Goods(this.node, products);
  }
  onProductPage(id: number) {
    //console.log(id);
  }
  toggleCart(id: number) {
    //console.log(id);
  }
}
