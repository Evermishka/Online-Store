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
    const productCardWrapper = new Control(productWrapper.node, 'div', 'product_card-wrapper');
    new ProductImages(productCardWrapper.node, product.images);
    new ProductDetails(productCardWrapper.node, product);
    const productPurchase = new ProductPurchase(productWrapper.node, product, state);
    productPurchase.onCartPage = (): void => this.onCartPage();
  }
}
