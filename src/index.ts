import './styles/style.scss';
import { App } from './js/application/app';
import { State } from './js/common/state';
import { CartData } from './js/common/cart-data';

const state = new State(CartData.getData());
const app = new App(document.body, state);

window.onbeforeunload = () => {
  new CartData(state.getData()).save();
};
