import { CartDataItem } from './state';

export class CartData {
  public value: CartDataItem[];

  constructor(data: CartDataItem[]) {
    this.value = [];
    data.forEach((elem) => {
      if (typeof elem.id != 'number') throw new Error('');
      if (typeof elem.price != 'number') throw new Error('');
      if (typeof elem.amount != 'number') throw new Error('');
      this.value.push({ id: elem.id, price: elem.price, amount: elem.amount });
    });
  }

  static load(): CartDataItem[] | void {
    const loaded: string | null = localStorage.getItem('savedCartState');
    if (loaded) return new CartData(JSON.parse(loaded).value).value;
  }

  public save(): void {
    localStorage.setItem('savedCartState', JSON.stringify(this));
  }

  static getData(): CartDataItem[] {
    const defaultData: CartDataItem[] = [];
    let cartData: CartDataItem[];
    try {
      const loaded = CartData.load();
      if (loaded) {
        cartData = loaded;
      } else {
        cartData = [];
      }
    } catch (e) {
      const newData = new CartData(defaultData).value;
      cartData = newData;
    }
    return cartData;
  }
}
