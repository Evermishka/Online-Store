import Control from '../../../../common/control';
import { PurchaseData } from '../../../../data/form';

export class FormLine extends Control {
  public value: string;
  public name: string;
  protected input: Control<HTMLInputElement>;
  
  constructor(parentNode: HTMLElement, formData: PurchaseData) {
    super(parentNode, 'div', 'purchase_line-wrapper');
    
    this.name = formData.name;
    this.value = '';
    const label: { node: HTMLLabelElement } = new Control(this.node, 'label', 'purchase_label', formData.label);
    label.node.htmlFor = formData.id;
    this.input = new Control(this.node, 'input', 'purchase_input', '');
    this.input.node.type = formData.type;
    this.input.node.name = formData.name;
    this.input.node.placeholder = formData.placeholder;
    this.input.node.id = formData.id;
    this.setValue();
  }

  protected setValue(): void {
    this.input.node.addEventListener('input', () => {
      this.value = this.input.node.value;
    });
  }
}
