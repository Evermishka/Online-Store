import Control from '../../../../common/control';
import { PurchaseData } from '../../../../data/form';

export class FormLine extends Control {
  public value: string;
  public name: string;
  
  constructor(parentNode: HTMLElement, formData: PurchaseData) {
    super(parentNode, 'div', 'purchase_line-wrapper');
    this.name = formData.name;
    this.value = '';
    const label: { node: HTMLLabelElement } = new Control(this.node, 'label', 'purchase_label', formData.label);
    label.node.htmlFor = formData.id;
    const name: { node: HTMLInputElement } = new Control(this.node, 'input', 'purchase_input', '');
    name.node.type = formData.type;
    name.node.name = formData.name;
    name.node.placeholder = formData.placeholder;
    name.node.id = formData.id;
    name.node.oninput = () => {
      this.value = name.node.value;
    };
  }
}
