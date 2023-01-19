import Control from '../../../common/control';
import { CartDataItem, State } from '../../../common/state';
import { Product } from '../../../data/data';

export class CartProductListControls extends Control {
  public deleteCartItem!: () => void;

  constructor(parentNode: HTMLElement, state: State, productData: Product) {
    super(parentNode, 'div', 'products-list_controls');
    const cartData = state.getData('cartData') as CartDataItem[];
    const productElement = cartData.find((el) => el.id === productData.id);
    if (productElement) {
      const decreaseAmountButton: { node: HTMLButtonElement } = new Control(
        this.node,
        'button',
        'products-list_decrease-button',
        '-'
      );
      decreaseAmountButton.node.onclick = (): void => {
        this.decrease(productData, state, increaseAmountButton.node, productAmount.node);
      };
      const productAmountNumber: number = productElement.amount;
      const productAmount = new Control(this.node, 'p', 'products-list_product-amount', productAmountNumber.toString());
      const increaseAmountButton: { node: HTMLButtonElement } = new Control(
        this.node,
        'button',
        'products-list_increase-button',
        '+'
      );
      if (productAmountNumber === productData.stock) {
        increaseAmountButton.node.disabled = true;
      }
      increaseAmountButton.node.onclick = (): void => {
        this.increase(productData, state, increaseAmountButton.node, productAmount.node);
      };
    }
  }

  private decrease(productData: Product, state: State, button: HTMLButtonElement, productAmount: HTMLElement): void {
    const cartData = state.getData('cartData') as CartDataItem[];
    const product = cartData.find((el) => el.id === productData.id);
    if (button.disabled) button.disabled = false;
    if (product && product.amount > 0) {
      state.deleteData(product, 'cartData');
      product.amount -= 1;
      if (product.amount === 0) {
        this.deleteCartItem();
      } else {
        productAmount.textContent = product.amount.toString();
        state.setData(product, 'cartData');
      }
    }
  }

  private increase(productData: Product, state: State, button: HTMLButtonElement, productAmount: HTMLElement): void {
    const cartData = state.getData('cartData') as CartDataItem[];
    const product = cartData.find((el) => el.id === productData.id);
    if (product && product.amount < productData.stock) {
      state.deleteData(product, 'cartData');
      product.amount += 1;
      productAmount.textContent = product.amount.toString();
      state.setData(product, 'cartData');
      if (product.amount === productData.stock) {
        button.disabled = true;
      }
    }
  }
}
