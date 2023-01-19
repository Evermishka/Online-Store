import Control from '../../../../common/control';
import { State, StateOptions } from '../../../../common/state';
import { Product, products } from '../../../../data/data';

export class CategoryInput extends Control {
  public filtration!: () => void;
  private type!: keyof StateOptions;
  constructor(parentNode: HTMLElement, type: keyof StateOptions, state: State) {
    super(parentNode, 'div', 'category_range_inner');
    this.type = type;
    const inputBlockTitle = new Control(this.node, 'h3', 'category_input_title');
    if (type === 'price') {
      inputBlockTitle.node.textContent = 'Price';
    } else if (type === 'stock') {
      inputBlockTitle.node.textContent = 'Stock';
    }
    const inputValueBlock = new Control(this.node, 'div', 'category_input_value');
    const maxValue = products.reduce((acc: number, it: Product) => {
      if (type === 'price') {
        if (it.price > acc) {
          acc = it.price;
        }
      } else if (type === 'stock') {
        if (it.stock > acc) {
          acc = it.stock;
        }
      }

      return acc;
    }, 0);

    const minValue = products.reduce((acc: number, it: Product) => {
      if (type === 'price') {
        if (it.price < acc) {
          acc = it.price;
        }
      } else if (type === 'stock') {
        if (it.stock < acc) {
          acc = it.stock;
        }
      }

      return acc;
    }, maxValue);
    const minInputValue = new Control(inputValueBlock.node, 'p', 'category_input_min');
    const maxInputValue = new Control(inputValueBlock.node, 'p', 'category_input_max');

    if (type === 'price') {
      minInputValue.node.textContent = `from €${minValue}`;
      maxInputValue.node.textContent = `to €${maxValue}`;
    } else if (type === 'stock') {
      minInputValue.node.textContent = `${minValue}`;
      maxInputValue.node.textContent = `${maxValue}`;
    }

    const inputInner = new Control(this.node, 'div', 'category_input_inner');
    const inputTrack = new Control(inputInner.node, 'div', 'category_input_track');
    const inputFirst = new Control<HTMLInputElement>(inputInner.node, 'input', 'category_input');
    inputFirst.node.type = 'range';
    inputFirst.node.min = minValue.toString();
    inputFirst.node.max = maxValue.toString();
    inputFirst.node.value = minValue.toString();
    inputFirst.node.oninput = (): void => inputOne();
    const inputSecond = new Control<HTMLInputElement>(inputInner.node, 'input', 'category_input');
    inputSecond.node.type = 'range';
    inputSecond.node.min = minValue.toString();
    inputSecond.node.max = maxValue.toString();
    inputSecond.node.value = maxValue.toString();
    inputSecond.node.oninput = (): void => inputTwo();

    state.onUpdate.add((type: keyof StateOptions): void => {
      if (type === 'resetFilters') {
        inputFirst.node.value = minValue.toString();
        inputSecond.node.value = maxValue.toString();
        fillColor();

        if (this.type === 'price') {
          minInputValue.node.textContent = `from €${minValue}`;
          maxInputValue.node.textContent = `to €${maxValue}`;
        } else if (this.type === 'stock') {
          minInputValue.node.textContent = `${minValue}`;
          maxInputValue.node.textContent = `${maxValue}`;
        }
      }
    });

    const minGap = 0;
    const inputOne = (): void => {
      if (parseInt(inputSecond.node.value) - parseInt(inputFirst.node.value) <= minGap) {
        inputFirst.node.value = String(parseInt(inputSecond.node.value) - minGap);
      }
      if (type === 'price') {
        minInputValue.node.textContent = `from €${inputFirst.node.value}`;
        this.setValue(
          {
            min: +inputFirst.node.value,
            max: +inputSecond.node.value,
          },
          state,
          type
        );
      } else if (type === 'stock') {
        this.setValue(
          {
            min: +inputFirst.node.value,
            max: +inputSecond.node.value,
          },
          state,
          type
        );
        minInputValue.node.textContent = inputFirst.node.value;
      }

      fillColor();
    };
    const inputTwo = (): void => {
      if (parseInt(inputSecond.node.value) - parseInt(inputFirst.node.value) <= minGap) {
        inputSecond.node.value = String(parseInt(inputFirst.node.value) + minGap);
      }
      if (type === 'price') {
        maxInputValue.node.textContent = `to €${inputSecond.node.value}`;
        this.setValue(
          {
            min: +inputFirst.node.value,
            max: +inputSecond.node.value,
          },
          state,
          type
        );
      } else if (type === 'stock') {
        this.setValue(
          {
            min: +inputFirst.node.value,
            max: +inputSecond.node.value,
          },
          state,
          type
        );
        maxInputValue.node.textContent = inputSecond.node.value;
      }
      fillColor();
    };
    function fillColor(): void {
      const percent1 = (+inputFirst.node.value / +inputFirst.node.max) * 100;
      const percent2 = (+inputSecond.node.value / +inputSecond.node.max) * 100;

      inputTrack.node.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #0077c0 ${percent1}% , #0077c0 ${percent2}%, #dadae5 ${percent2}%)`;
    }
  }

  private setValue(value: { min: number; max: number }, state: State, type: keyof StateOptions): void {
    state.setData(
      {
        min: value.min,
        max: value.max,
      },
      type
    );
    this.filtration();
  }
}
