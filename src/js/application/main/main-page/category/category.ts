import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { CategoryCheckbox } from './category-check';
import { CategoryInput } from './category-input';

export class Category extends Control {
  constructor(parentNode: HTMLElement, state: State, products: Array<Product>) {
    super(parentNode, 'div', 'category', '');
    const categoryBlock = new Control(this.node, 'div', 'category_block');
    const btnResetFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Reset Filter');
    const btnCopyFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Copy Filter');

    const categoryCheck = new CategoryCheckbox(categoryBlock.node, 'category', state);
    categoryCheck.filtration = () => this.filtration(state, products);
    const categoryPrice = new CategoryCheckbox(categoryBlock.node, 'brand', state);
    categoryPrice.filtration = () => this.filtration(state, products);

    const categoryInputPrice = new CategoryInput(categoryBlock.node, 'price', state);
    categoryInputPrice.filtration = () => this.filtration(state, products);
    const categoryInputStock = new CategoryInput(categoryBlock.node, 'stock', state);
    categoryInputStock.filtration = () => this.filtration(state, products);
  }

  private filtration(state: State, products: Array<Product>) {
    const getCategories: Array<string> = state.getData('category');
    const getBrands: Array<string> = state.getData('brand');
    let sortArr: Array<Product>;
    if (getCategories.length && !getBrands.length) {
      sortArr = this.filterCategory(products, getCategories);
    } else if (!getCategories.length && getBrands.length) {
      sortArr = this.filterBrand(products, getBrands);
    } else {
      if (!getCategories.length && !getBrands.length) {
        sortArr = products;
      } else {
        sortArr = this.filterBrand(this.filterCategory(products, getCategories), getBrands);
      }
    }

    const filterPriceAndStock: Array<Product> = this.filterPrice(this.filterStock(sortArr, state), state);

    const filterCounts: { category: { [key: string]: number }; brand: { [key: string]: number } } = this.filterCount(
      products,
      filterPriceAndStock,
      state
    );

    state.setData(filterPriceAndStock, 'sortGoods');
    state.setData(filterCounts, 'sortCount');
  }

  private filterCount(productList: Array<Product>, sortProductList: Array<Product>, state: State) {
    const result: { category: { [key: string]: number }; brand: { [key: string]: number } } = {
      category: {},
      brand: {},
    };

    productList.forEach((el: Product) => {
      result.category[el.category] = 0;
      result.brand[el.brand] = 0;
      sortProductList.forEach((it: Product, i: number) => {
        if (el.category === it.category) {
          result.category[el.category] += 1;
        }
        if (el.brand === it.brand) {
          result.brand[el.brand] += 1;
        }
      });
    });

    return result;
  }

  private filterPrice(arr: Array<Product>, state: State) {
    const value: { min: number; max: number } = {
      min: state.getData('price').min,
      max: state.getData('price').max,
    };

    return arr.filter((el: Product) => el.price >= value.min && el.price <= value.max);
  }

  private filterStock(arr: Array<Product>, state: State) {
    const value: { min: number; max: number } = {
      min: state.getData('stock').min,
      max: state.getData('stock').max,
    };

    return arr.filter((el: Product) => el.stock >= value.min && el.stock <= value.max);
  }

  private filterCategory(arr: Array<Product>, categories: Array<string>) {
    return arr.filter((el: Product) => categories.includes(el.category));
  }

  private filterBrand(arr: Array<Product>, brand: Array<string>) {
    return arr.filter((el: Product) => brand.includes(el.brand));
  }
}
