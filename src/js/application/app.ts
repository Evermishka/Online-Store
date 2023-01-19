import { listeners, State } from '../common/state';
import Control from '../common/control';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Main, Screen } from './main/main';

export class App extends Control {
  constructor(parendNode: HTMLElement, state: State) {
    super(parendNode, 'div', 'wrapper');
    const header = new Header(this.node, state);
    const main = new Control(this.node, 'main', 'main');
    new Footer(this.node);

    this.createApp(header, main, Screen.mainPage, state);
  }

  private createApp(header: Header, main: { node: HTMLElement }, screen: Screen, state: State, id?: number): void {
    const mainInner = new Main(main.node, screen, state, id);
    mainInner.onProductPage = (id: number): void => {
      mainInner.destroy();
      this.createApp(header, main, Screen.productPage, state, id);
    };
    mainInner.onCartPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, Screen.cartPage, state);
    };
    mainInner.onMainPage = (): void => {
      mainInner.destroy();
      this.createApp(header, main, Screen.mainPage, state);
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
        this.createApp(header, main, Screen.mainPage, state);
      }, 3000);
    };
    header.onMainPage = (): void => {
      const stateListeners = state.getData('stateListeners') as Array<listeners>;
      stateListeners.forEach((el: () => void, index: number) => {
        if (index > 0) {
          state.onUpdate.remove(el);
        }
      });
      mainInner.destroy();
      this.createApp(header, main, Screen.mainPage, state);
      state.setData(null, 'resetFilters');
    };
    header.onCartPage = (): void => {
      const stateListeners = state.getData('stateListeners') as Array<listeners>;
      stateListeners.forEach((el: () => void, index: number) => {
        if (index === stateListeners.length - 1) {
          state.onUpdate.remove(el);
        }
      });
      mainInner.destroy();
      this.createApp(header, main, Screen.cartPage, state);
    };
  }
}
