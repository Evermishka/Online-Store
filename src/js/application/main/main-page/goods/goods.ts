import { State, StateOptions } from '../../../../common/state';
import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { GoodsItem } from './goods-item';
import { GoodsFilters } from './goods-filters';

export class Goods extends Control {
  public onProductPage!: (id: number) => void;
  private goodsList!: Control<HTMLElement>;
  private isEmptyGoods!: Control<HTMLElement>;
  constructor(parentNode: HTMLElement, products: Array<Product>, state: State) {
    super(parentNode, 'div', 'goods');
    const goodFilters = new GoodsFilters(this.node, state, products);
    goodFilters.changeSize = (size: number): void => {
      this.goodsList.destroy();
      this.createGoods(
        this.node,
        (state.getData('sortGoods') as Array<Product>).length > 0
          ? (state.getData('sortGoods') as Array<Product>)
          : products,
        state,
        size
      );
    };

    this.createGoods(this.node, products, state);

    state.onUpdate.add((type: keyof StateOptions): void => {
      if (type === 'sortGoods') {
        this.goodsList.destroy();
        this.createGoods(this.node, state.getData('sortGoods') as Array<Product>, state);
      }
      if (type === 'isEmpty') {
        const isGoods = state.getData('isEmpty') as boolean;
        if (isGoods) {
          if (this.isEmptyGoods) {
            this.isEmptyGoods.destroy();
          }
          this.isEmptyGoods = new Control(this.node, 'p', 'goods_empty_text', 'No products found');
        } else {
          if (this.isEmptyGoods) {
            this.isEmptyGoods.destroy();
          }
        }
      }
    });
  }

  private createGoods(parentNode: HTMLElement, data: Array<Product>, state: State, size = 1): void {
    this.goodsList = new Control(parentNode, 'ul', 'goods_list');
    if (size === 1) {
      this.goodsList.node.style.gridTemplateColumns = 'repeat(3, 1fr)';
    } else {
      this.goodsList.node.style.gridTemplateColumns = 'repeat(5, 1fr)';
    }
    const products = data.map((el) => new GoodsItem(this.goodsList.node, el, state));
    products.forEach((el) => (el.onProductPage = (id: number): void => this.onProductPage(id)));
  }
}
