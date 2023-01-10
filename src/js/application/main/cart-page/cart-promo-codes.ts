import Control from '../../../common/control';
import { State } from '../../../common/state';
import { promoCodes } from '../../../data/promo-codes';

export class PromoCodes extends Control {
  private appliedCodesWrapper: Control<HTMLElement>;
  private appliedCodesList!: Control<HTMLElement>;
  private appliedCodesTitle!: Control<HTMLElement> | null;
  private promoCodeInput: Control<HTMLInputElement>;
  private promoCodesWrapper!: Control<HTMLElement>;
  public changeTotalSum!: () => void;

  constructor(parentNode: HTMLElement, state: State) {
    super(parentNode, 'div', 'promo-codes');
    this.appliedCodesWrapper = new Control(this.node, 'div', 'promo-codes_applied');
    this.renderAppliedCodes(state);
    this.promoCodeInput = new Control(this.node, 'input', 'promo-codes_input');
    this.promoCodeInput.node.type = 'text';
    this.promoCodeInput.node.oninput = () => this.addPromo(this.promoCodeInput.node.value, state);
    this.promoCodeInput.node.placeholder = 'Enter promo code';
    new Control(this.node, 'p', 'promo-codes_input-text', `Promo for test: 'RS', 'EPM'`);
  }

  private renderAppliedCodes(state: State) {
    const appliedCodesData = state.getData('promoData') as string[];
    if (appliedCodesData.length > 0) {
      if (this.appliedCodesList) {
        this.appliedCodesList.destroy();
      }
      if (!this.appliedCodesTitle) {
        this.appliedCodesTitle = new Control(
          this.appliedCodesWrapper.node,
          'p',
          'promo-codes_applied-title',
          'Applied codes'
        );
      }
      this.appliedCodesList = new Control(this.appliedCodesWrapper.node, 'ul', 'promo-codes_applied-list');
      appliedCodesData.forEach((el) => {
        const promoCode = promoCodes.find((elem) => elem.name === el);
        if (promoCode) {
          const appliedCodesItem = new Control(this.appliedCodesList.node, 'li', 'promo-codes_inner-wrapper');
          new Control(appliedCodesItem.node, 'p', 'promo-codes_text', `${promoCode.name} - ${promoCode.discount}%`);
          const removeCodeButton = new Control(appliedCodesItem.node, 'button', 'promo-codes_button', 'DROP');
          removeCodeButton.node.onclick = () => this.deletePromo(el, state);
        }
      });
    } else {
      if (this.appliedCodesTitle) {
        this.appliedCodesTitle.destroy();
        this.appliedCodesTitle = null;
      }
      if (this.appliedCodesList) this.appliedCodesList.destroy();
    }
  }

  private addPromo(value: string, state: State): void {
    const promoCode = promoCodes.find((el) => el.name === value);
    const appliedPromoCodes = state.getData('promoData') as string[];
    if (promoCode && !appliedPromoCodes.find((elem) => elem === promoCode.name)) {
      this.promoCodesWrapper = new Control(this.node, 'div', 'promo-codes_wrapper');
      const promoCodeWrapper = new Control(this.promoCodesWrapper.node, 'div', 'promo-codes_inner-wrapper');
      new Control(promoCodeWrapper.node, 'p', 'promo-codes_text', `${promoCode.name} - ${promoCode.discount}%`);
      const addCodeButton = new Control(promoCodeWrapper.node, 'button', 'promo-codes_button', 'ADD');
      addCodeButton.node.onclick = () => {
        state.setData(promoCode.name, 'promoData');
        this.promoCodeInput.node.value = '';
        promoCodeWrapper.destroy();
        this.renderAppliedCodes(state);
        this.changeTotalSum();
      };
    } else {
      if (this.promoCodesWrapper) this.promoCodesWrapper.destroy();
    }
  }

  private deletePromo(value: string, state: State): void {
    state.deleteData(value, 'promoData');
    this.renderAppliedCodes(state);
    this.changeTotalSum();
  }
}
