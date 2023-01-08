import Control from '../../../../common/control';
import { formData } from '../../../../data/form';
import { FormLine } from './form-line';
import { FormCardNumberLine } from './form-card-number-line';
import { FormCardExpireLine } from './form-card-expire-line';
import { FormCardCvvLine } from './form-card-cvv-line';

interface Errors {
  [key: string]: Control<HTMLElement>;
}

export class CartModal extends Control {
  private inputs: FormLine[];
  private errors: Errors;
  public closeModal!: () => void;
  public closeCart!: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'purchase');
    const purchaseBg = new Control(this.node, 'div', 'purchase_background');
    purchaseBg.node.onclick = () => this.closeModal();
    this.inputs = [];
    this.errors = {};
    const purchaseForm = new Control(this.node, 'form', 'purchase_form');
    new Control(purchaseForm.node, 'p', 'purchase_title', 'Personal details');
    this.inputs.push(new FormLine(purchaseForm.node, formData.name));
    this.inputs.push(new FormLine(purchaseForm.node, formData.phone));
    this.inputs.push(new FormLine(purchaseForm.node, formData.address));
    this.inputs.push(new FormLine(purchaseForm.node, formData.email));
    new Control(purchaseForm.node, 'p', 'purchase_title', 'Credit card details');
    this.inputs.push(new FormCardNumberLine(purchaseForm.node, formData.cardNumber));
    this.inputs.push(new FormCardExpireLine(purchaseForm.node, formData.cardExpire));
    this.inputs.push(new FormCardCvvLine(purchaseForm.node, formData.cardCvv));
    const confirmButton: { node: HTMLButtonElement } = new Control(
      purchaseForm.node,
      'button',
      'purchase_button',
      'CONFIRM'
    );
    confirmButton.node.type = 'button';
    confirmButton.node.onclick = () => this.sendForm();
  }

  private sendForm(): void {
    if (this.checkForm()) this.closeCart();
  }
  private checkForm(): boolean {
    const results: boolean[] = this.inputs.map((el: FormLine) => this.checkInput(el, el.name));
    return !results.includes(false);
  }
  private checkInput(input: FormLine, inputName: string): boolean {
    if (this.isValidInput(input.value, formData[inputName].validation)) {
      this.hideError(inputName);
      return true;
    } else {
      this.showError(inputName, input.node);
      input.node.oninput = () => this.checkInput(input, inputName);
      return false;
    }
  }
  private isValidInput(input: string, validation: RegExp): boolean {
    return validation.test(input);
  }
  private showError(name: string, parentNode: HTMLElement | null): void {
    if (!this.errors[name]) this.errors[name] = new Control(parentNode, 'span', 'purchase_error', formData[name].error);
  }
  private hideError(name: string): void {
    if (this.errors[name]) {
      this.errors[name].destroy();
      delete this.errors[name];
    }
  }
}
