import Control from '../../../common/control';
import { products } from '../../../data/data';
import { Breadcrumbs } from './breadcrumbs';

export class ProductPage extends Control {
  public onMainPage!: () => void;
  constructor(parendNode: HTMLElement, id: number | undefined) {
    super(parendNode, 'div', 'product-page', '');   

    const product = products.find(el => el.id === id)

    if (product) {
      const breadcrumbs = new Breadcrumbs(this.node, product);
      breadcrumbs.onMainPage = () => this.onMainPage();
    }
  }
}
