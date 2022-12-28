import './styles/style.scss';
import { App } from './js/application/app';
import { State } from './js/common/state';
import { CartData } from './js/common/cart-data';


const state = new State({
  cartData: CartData.getData(),
  filters: {
    category: [],
    brand: [],
    price: { min: 0, max: 0 },
    stock: { min: 0, max: 0 },
    sortData: [],
  },
});
const app = new App(document.body, state);

window.onbeforeunload = () => {
  new CartData(state.getData('cartData')).save();
};
