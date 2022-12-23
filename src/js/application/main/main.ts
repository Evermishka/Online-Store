import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';

export class Main extends Control {
  onProductPage!: (id: number) => void;
  constructor(parendNode: HTMLElement, screen: string) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case 'main-page':
        const category = new Category(this.node);
        const goods = new Goods(this.node, products);

        goods.onProductPage = (id: number) => this.onProductPage(id);
        break;
      case 'good-page':
        const goodPage = new ProductPage(this.node);
        break;
      case 'cart-page':
        const cartPage = new CartPage(this.node);
        break;

      default:
        return;
    }
  }
}
