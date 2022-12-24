import CartState from '../common/state';
import Control from '../common/control';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parendNode: HTMLElement, state: CartState) {
    super(parendNode, 'div', 'wrapper');
    const header = new Header(this.node, state);
    const main = new Control(this.node, 'main', 'main');
    const footer = new Footer(this.node);

    this.createApp(header, main, 'main-page', state);
  }

  createApp(header: Header, main: { node: HTMLElement }, screen: string, state: CartState, id?: number) {
    const mainInner = new Main(main.node, screen, state, id);
    mainInner.onProductPage = (id: number) => {
      mainInner.destroy();
      this.createApp(header, main, 'product-page', state, id);
    };
    header.onMainPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'main-page', state);
    };
    header.onCartPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page', state);
    };
  }
}
