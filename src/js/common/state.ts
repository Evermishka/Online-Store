import { Product } from '../data/data';
import Signal from './signal';

export interface CartDataItem {
  id: number;
  price: number;
  amount: number;
}

export interface FilterData {
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
}

export interface StateData {
  cartData: CartDataItem[];
  filters: FilterData;
  promoData: string[];
}

export class State {
  private _data: StateData;
  public onUpdate: Signal<string> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }

  public setData(value: CartDataItem | string | FilterData[keyof FilterData] | null, key: string): void {
    switch (key) {
      case 'cartData':
        if (value && typeof value === 'object' && 'id' in value) {
          this._data[key].push(value);
          this.onUpdate.emit(key);
        }
        break;
      case 'promoData':
        if (typeof value === 'string') {
          this._data[key].push(value);
          this.onUpdate.emit(key);
        }
        break;
      case 'category':
        if (typeof value === 'string') {
          this._data.filters[key].push(value.toLowerCase());
        }
        break;
      case 'brand':
        if (typeof value === 'string') {
          this._data.filters[key].push(value.toLowerCase());
        }
        break;
      case 'price':
        if (value && typeof value === 'object' && 'min' in value) {
          this._data.filters.price.min = value.min;
          this._data.filters.price.max = value.max;
          this.onUpdate.emit('sortGoods');
        }
        break;
      case 'stock':
        if (value && typeof value === 'object' && 'min' in value) {
          this._data.filters.stock.min = value.min;
          this._data.filters.stock.max = value.max;
          this.onUpdate.emit('sortGoods');
        }
        break;
      case 'sortGoods':
        if (Array.isArray(value) && typeof value === 'string') {
          this._data.filters[key] = value;
          this.onUpdate.emit('sortGoods');
        }
        break;
      case 'sortCount':
        if (value && typeof value === 'object' && 'brand' in value) {
          this._data.filters[key] = value;
          this.onUpdate.emit('sortCount');
        }
        break;
      case 'sortOptions':
        if (value && typeof value === 'object' && 'isSort' in value) {
          this._data.filters[key] = value;
          this.onUpdate.emit('sortOptions');
        }
        break;
      case 'sortSearch':
        if (typeof value === 'string') {
          this._data.filters[key] = value.toLowerCase();
          this.onUpdate.emit('sortSearch');
        }
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
      default:
        break;
    }
  }

  public deleteData(value: CartDataItem | string, key: string): void {
    switch (key) {
      case 'cartData':
        if (typeof value !== 'string' && 'id' in value) {
          const indexCart = this._data[key].findIndex((el: CartDataItem) => el.id === value.id);
          this._data[key].splice(indexCart, 1);
          this.onUpdate.emit(key);
        }
        break;
      case 'promoData':
        if (typeof value === 'string') {
          const indexPromo = this._data[key].findIndex((el: string) => el === value);
          this._data[key].splice(indexPromo, 1);
          this.onUpdate.emit(key);
        }
        break;
      case 'category':
        if (typeof value === 'string') {
          const indexCategory = this._data.filters[key].findIndex((el: string) => el === value);
          this._data.filters[key].splice(indexCategory, 1);
        }
        break;
      case 'brand':
        if (typeof value === 'string') {
          const indexBrand = this._data.filters[key].findIndex((el: string) => el === value);
          this._data.filters[key].splice(indexBrand, 1);
        }
        break;
      default:
        break;
    }
  }

  
  public getData(key: string): CartDataItem[] | string[] | FilterData[keyof FilterData] | void{
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
      default:
        break;
    }
  }

  public resetData(): void {
    this._data.cartData = [];
    this._data.promoData = [];
    this.onUpdate.emit('cartData');
  }
}
