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
      case 'sortGoods':
        this._data.filters[key] = value;
        this.onUpdate.emit('sortGoods');
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
      case 'sortGoods':
        return this._data.filters[key];
      default:
        break;
    }
  }
}
