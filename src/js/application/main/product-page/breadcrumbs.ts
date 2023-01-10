import Control from '../../../common/control';
import { Product } from '../../../data/data';

export class Breadcrumbs extends Control {
  public onMainPage!: () => void;
  constructor(parendNode: HTMLElement, product: Product) {
    super(parendNode, 'ul', 'breadcrumbs', '');
    const mainPageItem = new Control(this.node, 'li', 'breadcrumbs_item');
    const mainPageLink: { node: HTMLLinkElement } = new Control(mainPageItem.node, 'a', 'breadcrumbs_link', 'STORE');
    mainPageLink.node.href = '#';
    mainPageLink.node.onclick = () => this.onMainPage();
    new Control(this.node, 'li', 'breadcrumbs_item', product.category.toUpperCase());
    new Control(this.node, 'li', 'breadcrumbs_item', product.brand.toUpperCase());
    new Control(this.node, 'li', 'breadcrumbs_item', product.title.toUpperCase());
  }
}
