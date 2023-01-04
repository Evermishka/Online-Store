import './styles/style.scss';
import { App } from './js/application/app';
import { State } from './js/common/state';
import { CartData } from './js/common/cart-data';

const state = new State({
  cartData: CartData.getData(),
  filters: {
    category: [],
    brand: [],
    price: { min: 10, max: 1749 },
    stock: { min: 2, max: 150 },
    sortGoods: [],
    sortCount: { category: {}, brand: {} },
    sortOptions: {
      isSort: false,
      sortType: null,
      sortValue: null,
    },
    sortSeatch: '',
  },
  promoData: []
});
const app = new App(document.body, state);

window.onbeforeunload = () => {
  new CartData(state.getData('cartData')).save();
};
