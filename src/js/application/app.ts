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

    this.createApp(main, 'main-page');
  }

  createApp(main: { node: HTMLElement }, screen: string) {
    const mainInner = new Main(main.node);
  }
}
