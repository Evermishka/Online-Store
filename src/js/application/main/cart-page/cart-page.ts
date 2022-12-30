import Control from '../../../common/control';
import { State } from '../../../common/state';
import { CartProductList } from './cart-products-list';
import { CartSummary } from './cart-summary';

export class CartPage extends Control {
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'cart');
    const productsInCart = new Control(this.node, 'div', 'cart_products');
    const productsInCartWrapper = new Control(productsInCart.node, 'div', 'cart_products-wrapper');
    new Control(productsInCartWrapper.node, 'div', 'cart_products-title', 'Products In Cart');
    const pagination = new Control(productsInCartWrapper.node, 'div', 'cart_pagination', 'Pagination');
    //TODO Add pagination component
    const productsList = new CartProductList(productsInCart.node, state);
    const summary = new CartSummary(this.node, state);
  }
}
