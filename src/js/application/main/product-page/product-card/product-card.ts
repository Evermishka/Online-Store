import Control from '../../../../common/control';
import { State } from '../../../../common/state';
import { Product } from '../../../../data/data';
import { ProductDetails } from './product-details';
import { ProductImages } from './product-images';
import { ProductPurchase } from './product-purchase';

export class ProductCard extends Control {
  public onCartPage!: () => void;

  constructor(parendNode: HTMLElement, product: Product, state: State) {
    super(parendNode, 'div', 'product', '');
    new Control(this.node, 'h1', 'product_title', product.title);
    const productWrapper = new Control(this.node, 'div', 'product_wrapper');
    new ProductImages(productWrapper.node, product.images);
    new ProductDetails(productWrapper.node, product);
    const productPurchase = new ProductPurchase(this.node, product, state);
    productPurchase.onCartPage = () => this.onCartPage();
  }
}
