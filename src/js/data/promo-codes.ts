export interface PromoCode {
  name: string;
  discount: number;
}

export const promoCodes: Array<PromoCode> = [
  {
    name: 'RS',
    discount: 10
  },
  {
    name: 'EPM',
    discount: 5
  }
]