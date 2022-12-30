import Control from '../../../../common/control';
import { Product } from '../../../../data/data';
import { ProductDetails } from './product-details';
import { ProductImages } from './product-images';

export class ProductCard extends Control {
  constructor(parendNode: HTMLElement, product: Product) {
    super(parendNode, 'div', 'product', '');

    new Control(this.node, 'h1', 'product_title', product.title);

    const productWrapper = new Control(this.node, 'div', 'product_wrapper');
    new ProductImages(productWrapper.node, product.images);
    new ProductDetails(productWrapper.node, product);
  }
}
