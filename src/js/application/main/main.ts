import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';
import CartState from '../../common/cart-state';

export class Main extends Control {
  onProductPage!: (id: number) => void;
  constructor(parendNode: HTMLElement, screen: string, state: CartState, id?: number) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case 'main-page':
        const category = new Category(this.node, products);
        const goods = new Goods(this.node, products, state);

        goods.onProductPage = (id: number) => this.onProductPage(id);
        break;
      case 'product-page':
        const productPage = new ProductPage(this.node, id);
        break;
      case 'cart-page':
        const cartPage = new CartPage(this.node);
        break;

      default:
        return;
    }
  }
}
