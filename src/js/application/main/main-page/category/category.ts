import Control from '../../../../common/control';

export class Category extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'category', 'category block');
  }
}
