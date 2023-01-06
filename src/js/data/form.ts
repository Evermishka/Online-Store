export interface PurchaseData {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  id: string;
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
  },
  phone: {
    label: 'Phone',
    type: 'tel',
    name: 'tel',
    placeholder: '+7 999 999 99 99',
    id: 'purchase_tel',
  },
  address: {
    label: 'Delivery address',
    type: 'text',
    name: 'address',
    placeholder: 'Minsk, Azgura street',
    id: 'purchase_address',
  },
  email: {
    label: 'E-mail',
    type: 'email',
    name: 'email',
    placeholder: 'mail@gmail.com',
    id: 'purchase_email',
  },
  cardNumber: {
    label: 'Card Number',
    type: 'number',
    name: 'card-number',
    placeholder: '0000 0000 0000 0000',
    id: 'purchase_card-number',
  },
  cardExpire: {
    label: 'Expire date',
    type: 'text',
    name: 'card-expire',
    placeholder: 'MM / YY',
    id: 'purchase_card-expire',
  },
  cardCvv: {
    label: 'CVV',
    type: 'number',
    name: 'card-cvv',
    placeholder: '000',
    id: 'purchase_card-cvv',
  },
}