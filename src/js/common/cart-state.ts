import Signal from './signal';

export interface CartData {
  id: number,
  price: number,
  amount: number
}

export default class CartState {
  private _data: CartData[];
  public onUpdate: Signal<CartData[]> = new Signal();
  constructor(initialState: CartData[]) {
    this._data = initialState;
  }

  setData(value: CartData) {
    this._data.push(value);
    this.onUpdate.emit(this._data);
  }

  deleteData(value: CartData) {
    const index = this._data.findIndex(el => el.id === value.id);
    this._data.splice(index, 1);
    this.onUpdate.emit(this._data);
  }

  getData() {
    return this._data;
  }
}
