import Control from '../../../common/control';
import { State } from '../../../common/state';
import { products } from '../../../data/data';
import { Breadcrumbs } from './breadcrumbs';
import { ProductCard } from './product-card/product-card';

export class ProductPage extends Control {
  public onMainPage!: () => void;
  public onCartPage!: () => void;

  constructor(parendNode: HTMLElement, id: number | undefined, state: State) {
    super(parendNode, 'div', 'product-page', '');
    const product = products.find((el) => el.id === id);
    if (product) {
      const breadcrumbs = new Breadcrumbs(this.node, product);
      breadcrumbs.onMainPage = (): void => this.onMainPage();
      const productCard = new ProductCard(this.node, product, state);
      productCard.onCartPage = (): void => this.onCartPage();
    }
  }
}
