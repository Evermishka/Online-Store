import { PurchaseData } from '../../../../data/form';
import { FormLine } from './form-line';

export class FormCardCvvLine extends FormLine {
  constructor(parentNode: HTMLElement, formData: PurchaseData) {
    super(parentNode, formData);
  }
  protected setValue(): void {
    super.setValue();
    this.input.node.addEventListener('input', () => {
      if (this.input.node.value.length > 3) {
        this.input.node.value = this.input.node.value.slice(0, 3);
        this.value = this.input.node.value;
      }
    });
  }
}
