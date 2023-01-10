import './styles/style.scss';
import { App } from './js/application/app';
import { CartDataItem, State } from './js/common/state';
import { CartData } from './js/common/cart-data';
import { PromoData } from './js/common/promo-data';

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
    sortSearch: '',
  },
  promoData: PromoData.getData(),
});
new App(document.body, state);

window.onbeforeunload = (): void => {
  new CartData(state.getData('cartData') as Array<CartDataItem>).save();
  new PromoData(state.getData('promoData') as string[]).save();
};
