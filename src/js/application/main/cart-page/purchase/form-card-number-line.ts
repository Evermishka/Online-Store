import { PurchaseData } from '../../../../data/form';
import { FormLine } from './form-line';

const cardClasses: string[] = [
  'purchase_card-input__default',
  'purchase_card-input__amex',
  'purchase_card-input__visa',
  'purchase_card-input__mastercard'
]

export class FormCardNumberLine extends FormLine {
  constructor(parentNode: HTMLElement, formData: PurchaseData) {
    super(parentNode, formData);
    this.input.node.classList.add('purchase_card-input', 'purchase_card-input__default');
    this.changePaymentSystemLogo();
  }
  protected setValue(): void {
    super.setValue();
    this.input.node.addEventListener('input', () => {
      if (this.input.node.value.length > 16) {
        this.input.node.value = this.input.node.value.slice(0, 16);
        this.value = this.input.node.value;
      }
    });
  }
  private changePaymentSystemLogo(): void {
    this.input.node.addEventListener('input', () => {
      cardClasses.forEach((elem: string) => {
        this.input.node.classList.remove(elem);
      });
      switch (this.input.node.value.slice(0, 1)) {
        case '3':
          this.input.node.classList.add('purchase_card-input__amex');
          break;
        case '4':
          this.input.node.classList.add('purchase_card-input__visa');
          break;
        case '5':
          this.input.node.classList.add('purchase_card-input__mastercard');
          break;
        default:
          this.input.node.classList.add('purchase_card-input__default');
          break;
      }
    });
  }
}
