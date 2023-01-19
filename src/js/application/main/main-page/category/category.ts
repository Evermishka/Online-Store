import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { CategoryCheckbox } from './category-check';
import { CategoryInput } from './category-input';

export class Category extends Control {
  private listProducts!: Array<Product>;
  constructor(parentNode: HTMLElement, state: State, products: Array<Product>) {
    super(parentNode, 'div', 'category', '');
    this.listProducts = products;
    const categoryBlock = new Control(this.node, 'div', 'category_block');
    const categoryBlockBtns = new Control(categoryBlock.node, 'div', 'category_block_btn');
    const btnResetFilters = new Control(categoryBlockBtns.node, 'button', 'category_btn', 'reset filter');
    btnResetFilters.node.onclick = (): void => this.resetFiltres(state);
    new Control(categoryBlockBtns.node, 'button', 'category_btn', 'copy filter');

    const categoryCheck = new CategoryCheckbox(categoryBlock.node, 'category', state);
    categoryCheck.filtration = (): void => this.filtration(state, products);
    const categoryPrice = new CategoryCheckbox(categoryBlock.node, 'brand', state);
    categoryPrice.filtration = (): void => this.filtration(state, products);

    const categoryInputPrice = new CategoryInput(categoryBlock.node, 'price', state);
    categoryInputPrice.filtration = (): void => this.filtration(state, products);
    const categoryInputStock = new CategoryInput(categoryBlock.node, 'stock', state);
    categoryInputStock.filtration = (): void => this.filtration(state, products);

    state.onUpdate.add((type: string): void => {
      if (type === 'sortOptions' || type === 'sortSearch') {
        this.filtration(state, products);
      }
      if (type === 'resetFilters') {
        this.filtration(state, products);
      }
    });
  }

  private resetFiltres(state: State): void {
    state.setData(null, 'resetFilters');
  }

  private filtration(state: State, products: Array<Product>): void {
    const getCategories = state.getData('category') as Array<string>;
    const getBrands = state.getData('brand') as Array<string>;
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

    const getSortOptions = state.getData('sortOptions') as {
      isSort: boolean;
      sortType: null | string;
      sortValue: never;
    };
    if (getSortOptions.isSort) {
      const currentSortArr: Array<Product> = finishProductList ? finishProductList : products;
      if (getSortOptions.sortType === 'ASC') {
        finishProductList = this.sortByASC(currentSortArr, getSortOptions.sortValue);
      } else if (getSortOptions.sortType === 'DESC') {
        finishProductList = this.sortByDESC(currentSortArr, getSortOptions.sortValue);
      }
    }

    if (finishProductList.length === 0) {
      state.setData(true, 'isEmpty');
    } else {
      state.setData(false, 'isEmpty');
    }

    state.setData(finishProductList, 'sortGoods');
    state.setData(filterCounts, 'sortCount');
  }

  private sortBySearch(products: Array<Product>, state: State): Array<Product> {
    return products.filter((el: Product) => {
      const searchValue = state.getData('sortSearch') as string;
      for (const key in el) {
        if (key !== 'id' && key !== 'thumbnail' && key !== 'images') {
          const currentValue = el[key as keyof Product].toString().toLowerCase();
          if (currentValue.includes(searchValue.toLowerCase())) {
            return el;
          }
        }
      }
    });
  }

  private sortByASC(sortProducts: Array<Product>, sortValue: Extract<keyof Product, number>): Array<Product> {
    return sortProducts.sort((a: Product, b: Product) => a[sortValue] - b[sortValue]);
  }

  private sortByDESC(sortProducts: Array<Product>, sortValue: Extract<keyof Product, number>): Array<Product> {
    return sortProducts.sort((a: Product, b: Product) => b[sortValue] - a[sortValue]);
  }

  private filterCount(
    productList: Array<Product>,
    sortProductList: Array<Product>
  ): { category: { [key: string]: number }; brand: { [key: string]: number } } {
    const result: { category: { [key: string]: number }; brand: { [key: string]: number } } = {
      category: {},
      brand: {},
    };

    productList.forEach((el: Product) => {
      result.category[el.category] = 0;
      result.brand[el.brand] = 0;
      sortProductList.forEach((it: Product) => {
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

  private filterPrice(arr: Array<Product>, state: State): Array<Product> {
    const value: { min: number; max: number } = {
      min: (state.getData('price') as { min: number }).min,
      max: (state.getData('price') as { max: number }).max,
    };

    return arr.filter((el: Product) => el.price >= value.min && el.price <= value.max);
  }

  private filterStock(arr: Array<Product>, state: State): Array<Product> {
    const value: { min: number; max: number } = {
      min: (state.getData('stock') as { min: number }).min,
      max: (state.getData('stock') as { max: number }).max,
    };

    return arr.filter((el: Product) => el.stock >= value.min && el.stock <= value.max);
  }

  private filterCategory(arr: Array<Product>, categories: Array<string>): Array<Product> {
    return arr.filter((el: Product) => categories.includes(el.category.toLowerCase()));
  }

  private filterBrand(arr: Array<Product>, brand: Array<string>): Array<Product> {
    return arr.filter((el: Product) => brand.includes(el.brand.toLowerCase()));
  }
}
