import Control from '../../common/control';
import { MainPage } from './main-page/main-page';
import { products } from '../../data/data';
import { ProductPage } from './product-page/product-page';

export class Main extends Control {
  constructor(parendNode: HTMLElement) {
    super(parendNode, 'main', 'main');
    const mainPage = new MainPage(this.node, products);
    mainPage.onProductPage =() => {
      mainPage.destroy();
      const productPage = new ProductPage(this.node);
    }
  }  
}