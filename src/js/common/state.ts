import { Product } from '../data/data';
import Signal from './signal';

export type CartDataItem = {
  id: number;
  price: number;
  amount: number;
};

export type FilterData = {
  category: Array<string>;
  brand: Array<string>;
  price: { min: number; max: number };
  stock: { min: number; max: number };
  sortGoods: Array<Product>;
  sortCount: { category: { [key: string]: number }; brand: { [key: string]: number } };
  sortOptions: {
    isSort: boolean;
    sortType: null | string;
    sortValue: null | string;
  };
  sortSearch: string;
  isEmpty: boolean;
};

export interface StateData {
  cartData: CartDataItem[];
  filters: FilterData;
  promoData: string[];
}

export class State {
  private _data: any;
  public onUpdate: Signal<any> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }

  setData(value: any, key: string) {
    switch (key) {
      case 'cartData':
        this._data[key].push(value);
        this.onUpdate.emit(key);
        break;
      case 'promoData':
        this._data[key].push(value);
        this.onUpdate.emit(key);
        break;
      case 'category':
        this._data.filters[key].push(value.toLowerCase());
        break;
      case 'brand':
        this._data.filters[key].push(value.toLowerCase());
        break;
      case 'price':
        this._data.filters.price.min = value.min;
        this._data.filters.price.max = value.max;
        this.onUpdate.emit('sortGoods');
        break;
      case 'stock':
        this._data.filters.stock.min = value.min;
        this._data.filters.stock.max = value.max;
        this.onUpdate.emit('sortGoods');
        break;
      case 'sortGoods':
        this._data.filters[key] = value;
        this.onUpdate.emit('sortGoods');
        break;
      case 'sortCount':
        this._data.filters[key] = value;
        this.onUpdate.emit('sortCount');
        break;
      case 'sortOptions':
        this._data.filters[key] = value;
        this.onUpdate.emit('sortOptions');
        break;
      case 'sortSearch':
        this._data.filters[key] = value.toLowerCase();
        this.onUpdate.emit('sortSearch');
        break;
      case 'resetFilters':
        this._data.filters = {
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
        };
        this.onUpdate.emit('resetFilters');
        break;
      case 'isEmpty':
        this._data.filters[key] = value;
        this.onUpdate.emit('isEmpty');
        break;
      default:
        break;
    }
  }

  deleteData(value: any, key: string) {
    switch (key) {
      case 'cartData':
        const indexCart = this._data[key].findIndex((el: CartDataItem) => el.id === value.id);
        this._data[key].splice(indexCart, 1);
        this.onUpdate.emit(key);
        break;
      case 'promoData':
        const indexPromo = this._data[key].findIndex((el: string) => el === value);
        this._data[key].splice(indexPromo, 1);
        this.onUpdate.emit(key);
        break;
      case 'category':
        const indexCategory = this._data.filters[key].findIndex((el: string) => el === value);
        this._data.filters[key].splice(indexCategory, 1);
        break;
      case 'brand':
        const indexBrand = this._data.filters[key].findIndex((el: string) => el === value);
        this._data.filters[key].splice(indexBrand, 1);
        break;
      default:
        break;
    }
  }

  getData(key: string) {
    switch (key) {
      case 'cartData':
        return this._data[key];
      case 'promoData':
        return this._data[key];
      case 'category':
        return this._data.filters[key];
      case 'brand':
        return this._data.filters[key];
      case 'price':
        return this._data.filters.price;
      case 'stock':
        return this._data.filters.stock;
      case 'sortGoods':
        return this._data.filters[key];
      case 'sortCount':
        return this._data.filters[key];
      case 'sortOptions':
        return this._data.filters[key];
      case 'sortSearch':
        return this._data.filters[key];
      case 'isEmpty':
        return this._data.filters[key];
      case 'stateListeners':
        return this.onUpdate.listeners;
      default:
        break;
    }
  }

  resetData() {
    const cart: CartDataItem[] = this.getData('cartData');
    cart.forEach((elem) => this.deleteData(elem, 'cartData'));
    const promo: string[] = this.getData('promoData');
    promo.forEach((elem) => this.deleteData(elem, 'promoData'));
  }
}
