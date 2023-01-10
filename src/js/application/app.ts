import { State } from '../common/state';
import Control from '../common/control';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main } from './main/main';

export class App extends Control {
  constructor(parendNode: HTMLElement, state: State) {
    super(parendNode, 'div', 'wrapper');
    const header = new Header(this.node, state);
    const main = new Control(this.node, 'main', 'main');
    new Footer(this.node);

    this.createApp(header, main, 'main-page', state);
  }

  private createApp(header: Header, main: { node: HTMLElement }, screen: string, state: State, id?: number): void {
    const mainInner = new Main(main.node, screen, state, id);
    mainInner.onProductPage = (id: number): void => {
      mainInner.destroy();
      this.createApp(header, main, 'product-page', state, id);
    };
    mainInner.onCartPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page', state);
    };
    mainInner.onMainPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, 'main-page', state);
    };
    mainInner.closeCart = (): void => {
      state.resetData();
      let seconds = 3;
      const cartCloseText = new Control(
        mainInner.node,
        'p',
        'cart_close-text',
        `Thank you for your order. You will be redirected to the main page in ${seconds.toString()} seconds`
      );
      const intervalId = setInterval(() => {
        seconds--;
        cartCloseText.node.innerHTML = `Thank you for your order. You will be redirected to the main page in ${seconds.toString()} seconds`;
      }, 1000);
      setTimeout(() => {
        clearInterval(intervalId);
        mainInner.destroy();
        this.createApp(header, main, 'main-page', state);
      }, 3000);
    };
    header.onMainPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, 'main-page', state);
      state.setData(null, 'resetFilters');
    };
    header.onCartPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page', state);
    };
  }
}
