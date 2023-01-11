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
  isEmpty: boolean;
}

export interface StateData {
  cartData: CartDataItem[];
  filters: FilterData;
  promoData: string[];
}

export type listeners = () => void;

export class State {
  private _data: StateData;
  public onUpdate: Signal<string> = new Signal();
  constructor(initialState: StateData) {
    this._data = initialState;
  }
  public setData(value: CartDataItem | string | FilterData[keyof FilterData] | null | boolean, key: string): void {
    let currentValue;
    switch (key) {
      case 'cartData':
        currentValue = value as CartDataItem;
        this._data[key].push(currentValue);
        this.onUpdate.emit(key);
        break;
      case 'promoData':
        currentValue = value as string;
        this._data[key].push(currentValue);
        this.onUpdate.emit(key);
        break;
      case 'category':
        currentValue = value as string;
        this._data.filters[key].push(currentValue.toLowerCase());
        break;
      case 'brand':
        currentValue = value as string;
        this._data.filters[key].push(currentValue.toLowerCase());
        break;
      case 'price':
        currentValue = {
          min: (value as { min: number }).min,
          max: (value as { max: number }).max as number,
        };
        this._data.filters.price.min = currentValue.min;
        this._data.filters.price.max = currentValue.max;
        this.onUpdate.emit('sortGoods');
        break;
      case 'stock':
        currentValue = {
          min: (value as { min: number }).min,
          max: (value as { max: number }).max as number,
        };
        this._data.filters.stock.min = currentValue.min;
        this._data.filters.stock.max = currentValue.max;
        this.onUpdate.emit('sortGoods');
        break;
      case 'sortGoods':
        currentValue = value as Array<Product>;
        this._data.filters[key] = currentValue;
        this.onUpdate.emit('sortGoods');
        break;
      case 'sortCount':
        currentValue = value as { category: { [key: string]: number }; brand: { [key: string]: number } };
        this._data.filters[key] = currentValue;
        this.onUpdate.emit('sortCount');
        break;
      case 'sortOptions':
        currentValue = value as {
          isSort: boolean;
          sortType: null | string;
          sortValue: null | string;
        };
        this._data.filters[key] = currentValue;
        this.onUpdate.emit('sortOptions');
        break;
      case 'sortSearch':
        currentValue = value as string;
        this._data.filters[key] = currentValue.toLowerCase();
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
          isEmpty: false,
        };
        this.onUpdate.emit('resetFilters');
        break;
      case 'isEmpty':
        currentValue = value as boolean;
        this._data.filters[key] = currentValue;
        this.onUpdate.emit('isEmpty');
        break;
      default:
        return;
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

  public getData(
    key: string
  ):
    | CartDataItem[]
    | string[]
    | FilterData[keyof FilterData]
    | void
    | { min: number; max: number }
    | boolean
    | ((params: string) => void)[] {
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
        return;
    }
  }

  public resetData(): void {
    this._data.cartData = [];
    this._data.promoData = [];
    this.onUpdate.emit('cartData');
  }
}
