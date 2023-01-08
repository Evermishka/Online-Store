import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { Product, products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';
import { State } from '../../common/state';

export class Main extends Control {
  goods!: Goods;
  public onProductPage!: (id: number) => void;
  public onCartPage!: () => void;
  public onMainPage!: () => void;
  public closeCart!: () => void;
  constructor(parendNode: HTMLElement, screen: string, state: State, id?: number) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case 'main-page':
        const category = new Category(this.node, state, products);
        const goods = new Goods(this.node, products, state);
        goods.onProductPage = (id: number) => this.onProductPage(id);
        break;
      case 'product-page':
        const productPage = new ProductPage(this.node, id, state);
        productPage.onCartPage = () => this.onCartPage();
        productPage.onMainPage = () => this.onMainPage();
        break;
      case 'cart-page':
        const cartPage = new CartPage(this.node, state);
        cartPage.closeCart = () => {
          cartPage.destroy();
          this.closeCart();
        };
        break;
      default:
        return;
    }
  }
}
