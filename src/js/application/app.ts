import Control from '../common/control';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parendNode: HTMLElement) {
    super(parendNode, 'div', 'wrapper');
    const header = new Header(this.node);
    const main = new Control(this.node, 'main', 'main');
    const footer = new Footer(this.node);

    this.createApp(header, main, 'main-page');
  }

  createApp(header: Header, main: { node: HTMLElement }, screen: string, id?: number) {
    const mainInner = new Main(main.node, screen, id);
    mainInner.onProductPage = (id: number) => {
      mainInner.destroy();
      this.createApp(header, main, 'product-page', id);
    };
    header.onMainPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'main-page');
    };
    header.onCartPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page');
    };
  }
}
