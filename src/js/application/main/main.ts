import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { products } from '../../data/data';
import { Goods } from './main-page/goods/goods';

export class Main extends Control {
  constructor(parendNode: HTMLElement) {
    super(parendNode, 'div', 'main_inner');
    const category = new Category(this.node);
    const goods = new Goods(this.node, products);

    goods.onProductPage = (id: number) => {
      console.log(id);
    };

    // mainPage.onProductPage = () => {
    //   mainPage.destroy();
    //   const productPage = new ProductPage(this.node);
    // };
  }
}
