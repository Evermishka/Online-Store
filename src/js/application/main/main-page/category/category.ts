import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { CategoryCheckbox } from './category-check';
import { CategoryInput } from './category-input';
import { products } from '../../../../data/data';

export class Category extends Control {
  listProducts!: Array<Product>;
  constructor(parentNode: HTMLElement, state: State, products: Array<Product>) {
    super(parentNode, 'div', 'category', '');
    this.listProducts = products;
    const categoryBlock = new Control(this.node, 'div', 'category_block');
    const btnResetFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Reset Filter');
    btnResetFilters.node.onclick = () => this.resetFiltres(state);
    const btnCopyFilters = new Control(categoryBlock.node, 'button', 'category_btn', 'Copy Filter');

    const categoryCheck = new CategoryCheckbox(categoryBlock.node, 'category', state);
    categoryCheck.filtration = () => this.filtration(state, products);
    const categoryPrice = new CategoryCheckbox(categoryBlock.node, 'brand', state);
    categoryPrice.filtration = () => this.filtration(state, products);

    const categoryInputPrice = new CategoryInput(categoryBlock.node, 'price', state);
    categoryInputPrice.filtration = () => this.filtration(state, products);
    const categoryInputStock = new CategoryInput(categoryBlock.node, 'stock', state);
    categoryInputStock.filtration = () => this.filtration(state, products);

    state.onUpdate.add((type: string) => {
      if (type === 'sortOptions' || type === 'sortSearch') {
        this.filtration(state, products);
      }
      if (type === 'resetFilters') {
        this.filtration(state, products);
      }
    });
  }

  private resetFiltres(state: State) {
    state.setData(null, 'resetFilters');
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

    let filterPriceAndStock: Array<Product> = this.filterPrice(this.filterStock(sortArr, state), state);
    let finishProductList: Array<Product> = filterPriceAndStock;

    if (state.getData('sortSearch')) {
      finishProductList = this.sortBySearch(filterPriceAndStock, state);
    } else {
      finishProductList = filterPriceAndStock;
    }

    const filterCounts: { category: { [key: string]: number }; brand: { [key: string]: number } } = this.filterCount(
      this.listProducts,
      finishProductList
    );

    const getSortOptions: { isSort: boolean; sortType: null | string; sortValue: never } = state.getData('sortOptions');
    if (getSortOptions.isSort) {
      const currentSortArr: Array<Product> = finishProductList ? finishProductList : products;
      if (getSortOptions.sortType === 'ASC') {
        finishProductList = this.sortByASC(currentSortArr, getSortOptions.sortValue);
      } else if (getSortOptions.sortType === 'DESC') {
        finishProductList = this.sortByDESC(currentSortArr, getSortOptions.sortValue);
      }
    }

    state.setData(finishProductList, 'sortGoods');
    state.setData(filterCounts, 'sortCount');
  }

  private sortBySearch(products: Array<Product>, state: State) {
    return products.filter((el: any) => {
      let searchValue = state.getData('sortSearch');
      for (let key in el) {
        if (key !== 'id' && key !== 'thumbnail' && key !== 'images') {
          let currentValue = el[key].toString().toLowerCase();
          if (currentValue.includes(searchValue.toLowerCase())) {
            return el;
          }
        }
      }
    });
  }

  private sortByASC(sortProducts: Array<Product>, sortValue: Extract<keyof Product, number>) {
    return sortProducts.sort((a: Product, b: Product) => a[sortValue] - b[sortValue]);
  }

  private sortByDESC(sortProducts: Array<Product>, sortValue: Extract<keyof Product, number>) {
    return sortProducts.sort((a: Product, b: Product) => b[sortValue] - a[sortValue]);
  }

  private filterCount(productList: Array<Product>, sortProductList: Array<Product>) {
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
    return arr.filter((el: Product) => categories.includes(el.category.toLowerCase()));
  }

  private filterBrand(arr: Array<Product>, brand: Array<string>) {
    return arr.filter((el: Product) => brand.includes(el.brand.toLowerCase()));
  }
}
