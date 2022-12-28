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
  sortCount: { [key: string]: number };
};

export interface StateData {
  cartData: CartDataItem[];
  filters: FilterData;
}

export class State {
  private _data: any;
  public onUpdate: Signal<any> = new Signal();
  constructor(initialState: any) {
    this._data = initialState;
  }

  setData(value: any, key: string) {
    switch (key) {
      case 'cartData':
        this._data[key].push(value);
        this.onUpdate.emit(key);
        break;
      case 'category':
        this._data.filters[key].push(value);
        break;
      case 'brand':
        this._data.filters[key].push(value);
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
        if (this._data.filters[key][value] === undefined) {
          this._data.filters[key][value] = 1;
        } else {
          this._data.filters[key][value] += 1;
        }
        this.onUpdate.emit('sortCount');
        break;
      default:
        break;
    }
  }

  deleteData(value: any, key: string) {
    switch (key) {
      case 'cartData':
        const indexCart = this._data[key].findIndex((el: any) => el.id === value.id);
        this._data[key].splice(indexCart, 1);
        this.onUpdate.emit(key);
        break;
      case 'category':
        const indexCategory = this._data.filters[key].findIndex((el: any) => el === value);
        this._data.filters[key].splice(indexCategory, 1);
        break;
      case 'brand':
        const indexBrand = this._data.filters[key].findIndex((el: any) => el === value);
        this._data.filters[key].splice(indexBrand, 1);
        break;
      case 'price':
        this._data.filters.price.min = 0;
        this._data.filters.price.max = 0;
        break;
      case 'stock':
        this._data.filters.stock.min = 0;
        this._data.filters.stock.max = 0;
        break;
      case 'sortGoods':
        this._data.filters[key] = value;
        break;
      default:
        break;
    }
  }

  getData(key: string) {
    switch (key) {
      case 'cartData':
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
      default:
        break;
    }
  }
}
