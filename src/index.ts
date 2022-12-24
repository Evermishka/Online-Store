import './styles/style.scss';
import { App } from './js/application/app';
import CartState from './js/common/cart-state';

const cartState = new CartState([]);
const app = new App(document.body, cartState);
