import Control from '../../common/control';
import { Category } from './main-page/category/category';
import { Product, products } from '../../data/data';
import { Goods } from './main-page/goods/goods';
import { ProductPage } from './product-page/product-page';
import { CartPage } from './cart-page/cart-page';
import { State } from '../../common/state';

export class Main extends Control {
  onProductPage!: (id: number) => void;
  goods!: Goods;
  onMainPage!: () => void;
  constructor(parendNode: HTMLElement, screen: string, state: State, id?: number) {
    super(parendNode, 'div', 'main_inner');
    switch (screen) {
      case 'main-page':
        const category = new Category(this.node, state, products);
        this.createGoods(state, products);
        state.onUpdate.add((type) => {
          if (type === 'sortGoods') {
            this.goods.destroy();
            this.createGoods(state, state.getData('sortGoods'));
          }
        });
        break;
      case 'product-page':
        const productPage = new ProductPage(this.node, id);
        productPage.onMainPage = () => this.onMainPage();
        break;
      case 'cart-page':
        const cartPage = new CartPage(this.node);
        break;

      default:
        return;
    }
  }

  createGoods(state: State, products: Array<Product>) {
    this.goods = new Goods(this.node, products, state);
    this.goods.onProductPage = (id: number) => this.onProductPage(id);
  }
}
