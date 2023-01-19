import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';
import { State } from '../../common/state';

export enum Screen {
  mainPage = 'main-page',
  productPage = 'product-page',
  cartPage = 'cart-page',
}

export class Main extends Control {
  private goods!: Goods;
  private productPage!: {
    onMainPage: () => void;
    onCartPage: () => void;
    node: HTMLElement;
  };
  private cartPage!: {
    destroy(): unknown;
    closeCart: () => void;
    node: HTMLElement;
  };
  public onProductPage!: (id: number) => void;
  public onCartPage!: () => void;
  public onMainPage!: () => void;
  public closeCart!: () => void;
  constructor(parendNode: HTMLElement, screen: Screen, state: State, id?: number) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case Screen.mainPage:
        new Category(this.node, state, products);
        this.goods = new Goods(this.node, products, state);
        this.goods.onProductPage = (id: number): void => this.onProductPage(id);
        break;
      case Screen.productPage:
        this.productPage = new ProductPage(this.node, id, state);
        this.productPage.onCartPage = (): void => this.onCartPage();
        this.productPage.onMainPage = (): void => this.onMainPage();
        break;
      case Screen.cartPage:
        this.cartPage = new CartPage(this.node, state);
        this.cartPage.closeCart = (): void => {
          this.cartPage.destroy();
          this.closeCart();
        };
        break;
      default:
        return;
    }
  }
}
