export class PromoData {
  public value: string[];

  constructor(data: string[]) {
    this.value = [];
    data.forEach((elem) => {
      if (typeof elem != 'string') throw new Error('');
      this.value.push(elem);
    });
  }

  public static load(): string[] | void {
    const loaded: string | null = localStorage.getItem('savedPromoState');
    if (loaded) return new PromoData(JSON.parse(loaded).value).value;
  }

  public save(): void {
    localStorage.setItem('savedPromoState', JSON.stringify(this));
  }

  public static getData(): string[] {
    const defaultData: string[] = [];
    let cartData: string[];
    try {
      const loaded = PromoData.load();
      if (loaded) {
        cartData = loaded;
      } else {
        cartData = [];
      }
    } catch (e) {
      const newData = new PromoData(defaultData).value;
      cartData = newData;
    }
    return cartData;
  }
}
