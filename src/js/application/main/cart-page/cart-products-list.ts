import Control from '../../../common/control';
import { CartDataItem, State } from '../../../common/state';
import { products } from '../../../data/data';
import { CartProductListControls } from './cart-products-list-controls';

const PRODUCT_IMAGE_WIDTH: number = 100;

export class CartProductList extends Control {
  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'ul', 'products-list');
    state.getData('cartData').forEach((el: CartDataItem, index: number) => {
      const productData = products.find((elem) => elem.id === el.id);
      if (productData) {
        const product = new Control(this.node, 'li', 'products-list_item', '');
        new Control(product.node, 'p', 'products-list_number', (index + 1).toString());
        const productImage: { node: HTMLImageElement } = new Control(product.node, 'img', 'products-list_image');
        productImage.node.src = productData.thumbnail;
        productImage.node.width = PRODUCT_IMAGE_WIDTH;
        const productDetails = new Control(product.node, 'div', 'products-list_details');
        const productDetailsWrapper = new Control(productDetails.node, 'div', 'products-list_details-wrapper');
        new Control(productDetailsWrapper.node, 'p', 'products-list_title', productData.title);
        new Control(productDetailsWrapper.node, 'p', 'cart_rating', productData.rating.toString());
        new Control(productDetails.node, 'p', 'products-list_description', productData.description);
        const productInfo = new Control(product.node, 'div', 'products-list_info');
        new Control(productInfo.node, 'p', 'products-list_stock', `Stock: ${productData.stock}`);
        new CartProductListControls(productInfo.node, state, productData);
        new Control(productInfo.node, 'p', 'products-list_price', `€${productData.price}.00`);
      }
    });
  }
}
