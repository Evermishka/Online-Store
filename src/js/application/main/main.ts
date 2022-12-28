import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { Product, products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';
import { State } from '../../common/state';

export class Main extends Control {
  onProductPage!: (id: number) => void;
  constructor(parendNode: HTMLElement, screen: string, state: State, id?: number) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case 'main-page':
        const category = new Category(this.node, products, state);
        this.createNewGoods(products, state);
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

  private createNewGoods(products: Array<Product>, state: State, sortArr?: Array<Product>) {
    const goods = new Goods(this.node, sortArr || products, state);
    goods.onProductPage = (id: number) => this.onProductPage(id);
    goods.newFilters = (sortArr: Array<Product>) => {
      goods.destroy();
      this.createNewGoods(products, state, sortArr);
    };
  }
}
