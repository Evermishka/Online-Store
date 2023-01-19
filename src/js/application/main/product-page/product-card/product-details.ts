import Control from '../../../../common/control';
import { Product } from '../../../../data/data';

export class ProductDetails extends Control {
  constructor(parendNode: HTMLElement, product: Product) {
    super(parendNode, 'div', 'product_details', '');
    new Control(this.node, 'p', 'product_rating', `Rating: ${product.rating}`);
    new Control(this.node, 'p', 'product_info', `${product.category} / ${product.brand}`);
    new Control(this.node, 'p', 'product_description', product.description);
  }
}
