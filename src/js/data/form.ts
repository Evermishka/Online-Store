export interface PurchaseData {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  id: string;
  error: string;
  validation: RegExp;
}

interface formData {
  [key: string]: PurchaseData
}

export const formData: formData = {
  name: {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Zhenya Kachanov',
    id: 'purchase_name',
    error: 'Name must contain at least 2 words, each word must have at least 3 characters',
    validation: /^([A-z]{3,64}\s?){2,64}$/i,
  },
  phone: {
    label: 'Phone',
    type: 'tel',
    name: 'phone',
    placeholder: '+7 999 999 99 99',
    id: 'purchase_tel',
    error: 'Phone must start with "+", contain only digits, and be no shorter than 9 digits.',
    validation: /^\+[0-9]{9}$/i,
  },
  address: {
    label: 'Delivery address',
    type: 'text',
    name: 'address',
    placeholder: 'Minsk, Azgura street',
    id: 'purchase_address',
    error: 'Address must contain at least 3 words, each word must have at least 5 characters',
    validation: /^([A-z]{5,64}\s?){3,64}$/i,
  },
  email: {
    label: 'E-mail',
    type: 'email',
    name: 'email',
    placeholder: 'mail@gmail.com',
    id: 'purchase_email',
    error: 'This must be a valid e-mail',
    validation: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  },
  cardNumber: {
    label: 'Card Number',
    type: 'number',
    name: 'cardNumber',
    placeholder: '0000 0000 0000 0000',
    id: 'purchase_card-number',
    error: 'Card number must contain 16 digits',
    validation: /^[0-9]{16}$/i,
  },
  cardExpire: {
    label: 'Expire date',
    type: 'text',
    name: 'cardExpire',
    placeholder: 'MM / YY',
    id: 'purchase_card-expire',
    error: "Month can't be less than 01 or more than 12",
    validation: /^0[0-9]|1[0-2]+[0-9]{2}$/i,
  },
  cardCvv: {
    label: 'CVV',
    type: 'number',
    name: 'cardCvv',
    placeholder: '000',
    id: 'purchase_card-cvv',
    error: 'CVV must contain 3 digits',
    validation: /^[0-9]{3}$/i,
  },
}