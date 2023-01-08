import { PurchaseData } from '../../../../data/form';
import { FormLine } from './form-line';

export class FormCardExpireLine extends FormLine {
  constructor(parentNode: HTMLElement, formData: PurchaseData) {
    super(parentNode, formData);
  }
  protected setValue() {
    super.setValue();
    this.input.node.addEventListener('input', () => {
      if (this.input.node.value.length < 2) {
        this.input.node.value = this.input.node.value.replace(/(\/)/g, '');
      }
      if (this.input.node.value.length > 2) {
        if (/(\/)/g.test(this.input.node.value)) {
          const dividerPos = this.input.node.value.indexOf('/');
          if (dividerPos > 2) {
            this.input.node.value = `${this.input.node.value.slice(0, 2)}/${this.input.node.value.slice(dividerPos + 1)}`;
          }
        } else {
          this.input.node.value = `${this.input.node.value.slice(0, 2)}/${this.input.node.value.slice(2)}`;
        }        
      }
      if (this.input.node.value.length > 5) {
        this.input.node.value = this.input.node.value.slice(0, 5);        
      }
      this.value = this.input.node.value;
    });
  }
}
