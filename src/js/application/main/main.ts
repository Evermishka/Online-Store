import Control from '../../common/control';
import { Category } from './category/category';
import { Goods } from './goods/goods';

export class Main extends Control {
  constructor(parendNode: HTMLElement) {
    super(parendNode, 'main', 'main');
    const category = new Category(this.node);
    const goods = new Goods(this.node);
  }
}
