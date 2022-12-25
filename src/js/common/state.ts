import Signal from './signal';

export interface CartDataItem {
  id: number;
  price: number;
  amount: number;
}

export class State {
  private _data: CartDataItem[];
  public onUpdate: Signal<CartDataItem[]> = new Signal();
  constructor(initialState: CartDataItem[]) {
    this._data = initialState;
  }

  setData(value: CartDataItem) {
    this._data.push(value);
    this.onUpdate.emit(this._data);
  }

  deleteData(value: CartDataItem) {
    const index = this._data.findIndex((el) => el.id === value.id);
    this._data.splice(index, 1);
    this.onUpdate.emit(this._data);
  }

  getData() {
    return this._data;
  }
}
