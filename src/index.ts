import './styles/style.scss';
import { App } from './js/application/app';
import { State } from './js/common/state';

const state = new State({
  cartData: [],
  filters: {
    category: {},
    brand: {},
    price: { min: 0, max: 0 },
    stock: { min: 0, max: 0 },
  },
});
const app = new App(document.body, state);
