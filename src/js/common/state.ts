import Signal from './signal';

export type CartData = {
  id: number;
  price: number;
  amount: number;
};

export type FilterData = {
  category: Array<string>;
  brand: Array<string>;
  price: { min: number; max: number };
  stock: { min: number; max: number };
};

export interface StateData {
  cartData: CartData[];
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
        this.onUpdate.emit(this._data[key]);
        break;
      case 'category':
        this._data.filters[key].push(value);
        this.onUpdate.emit(this._data.filters[key]);
        break;
      case 'brand':
        this._data.filters[key].push(value);
        this.onUpdate.emit(this._data.filters[key]);
        break;
      case 'price':
        this._data.filters[key].min = value.min;
        this._data.filters[key].max = value.max;
        this.onUpdate.emit(this._data.filters[key].min);
        this.onUpdate.emit(this._data.filters[key].max);
        break;
      case 'stock':
        this._data.filters[key].min = value.min;
        this._data.filters[key].max = value.max;
        this.onUpdate.emit(this._data.filters[key].min);
        this.onUpdate.emit(this._data.filters[key].max);
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
        this.onUpdate.emit(this._data[key]);
        break;
      case 'category':
        const indexCategory = this._data.filters[key].findIndex((el: any) => el.id === value);
        this._data.filters[key].splice(indexCategory, 1);
        this.onUpdate.emit(this._data.filters[key]);
        break;
      case 'brand':
        const indexBrand = this._data.filters[key].findIndex((el: any) => el.id === value);
        this._data.filters[key].splice(indexBrand, 1);
        this.onUpdate.emit(this._data.filters[key]);
        break;
      case 'price':
        this.onUpdate.emit((this._data.filters[key].min = 0));
        this.onUpdate.emit((this._data.filters[key].max = 0));
        break;
      case 'stock':
        this.onUpdate.emit((this._data.filters[key].min = 0));
        this.onUpdate.emit((this._data.filters[key].max = 0));
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
        const minMaxPrice = {
          min: this._data.filters[key].min,
          max: this._data.filters[key].max,
        };
        return minMaxPrice;
      case 'stock':
        const minMaxStock = {
          min: this._data.filters[key].min,
          max: this._data.filters[key].max,
        };
        return minMaxStock;
      default:
        break;
    }
  }
}
