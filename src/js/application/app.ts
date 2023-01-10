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
    const footer = new Footer(this.node);

    this.createApp(header, main, 'main-page', state);
  }

  createApp(header: Header, main: { node: HTMLElement }, screen: string, state: State, id?: number) {
    const mainInner = new Main(main.node, screen, state, id);
    mainInner.onProductPage = (id: number) => {
      mainInner.destroy();
      this.createApp(header, main, 'product-page', state, id);
    };
    mainInner.onCartPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page', state);
    };
    mainInner.onMainPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'main-page', state);
    };
    mainInner.closeCart = () => {
      state.resetData();
      let seconds: number = 3;
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
    header.onMainPage = () => {
      const stateListeners = state.getData('stateListeners');
      stateListeners.forEach((el: () => void, index: number) => {
        if (index > 0) {
          state.onUpdate.remove(el);
        }
      });
      mainInner.destroy();
      this.createApp(header, main, 'main-page', state);
      state.setData(null, 'resetFilters');
    };
    header.onCartPage = () => {
      mainInner.destroy();
      this.createApp(header, main, 'cart-page', state);
      const stateListeners = state.getData('stateListeners');
      stateListeners.forEach((el: () => void, index: number) => {
        if (index === stateListeners.length - 1) {
          state.onUpdate.remove(el);
        }
      });
    };
  }
}
