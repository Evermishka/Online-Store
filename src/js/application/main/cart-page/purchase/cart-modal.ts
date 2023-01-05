import Control from '../../../../common/control';
import { formData } from '../../../../data/form';
import { FormLine } from './form-line';

export class CartModal extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'purchase');
    new Control(this.node, 'p', 'purchase_title', 'Personal details');
    const formLineName = new FormLine(this.node, formData.name);
    const formLinePhone = new FormLine(this.node, formData.phone);
    const formLineAddress = new FormLine(this.node, formData.address);
    const formLineEmail = new FormLine(this.node, formData.email);
    new Control(this.node, 'p', 'purchase_title', 'Credit card details');
    const formLineCardNumber = new FormLine(this.node, formData.cardNumber);
    const formLineCardExpire = new FormLine(this.node, formData.cardExpire);
    const formLineCardCvv = new FormLine(this.node, formData.cardCvv);
    const confirmButton = new Control(this.node, 'button', 'purchase_button', 'CONFIRM')
  }
}
