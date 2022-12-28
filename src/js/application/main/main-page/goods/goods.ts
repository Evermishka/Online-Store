import { State } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';

export class Goods extends Control {
  onProductPage!: (id: number) => void;
  newFilters!: (newGoods: Array<Product>) => void;
  constructor(parendNode: HTMLElement, data: Array<Product>, state: State) {
    super(parendNode, 'ul', 'goods');

    const products = data.map((el) => new GoodsItem(this.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number) => this.onProductPage(id)));

    state.onUpdate.add(() => {
      const getCategories = state.getData('category');
      const getBrands = state.getData('brand');
      let sortArr: Array<Product>;
      if (getCategories.length && !getBrands.length) {
        sortArr = this.filterCategory(data, getCategories);
      } else if (!getCategories.length && getBrands.length) {
        sortArr = this.filterBrand(data, getBrands);
      } else {
        if (!getCategories.length && !getBrands.length) {
          sortArr = data;
        } else {
          sortArr = this.filterBrand(this.filterCategory(data, getCategories), getBrands);
        }
      }
      this.newFilters(sortArr);
    });
  }

  filterCategory(arr: Array<Product>, categories: Array<string>) {
    return arr.filter((el) => categories.includes(el.category));
  }

  filterBrand(arr: Array<Product>, brand: Array<string>) {
    return arr.filter((el) => brand.includes(el.brand));
  }
}
