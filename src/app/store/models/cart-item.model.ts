export interface CartItem {
  name: string;
  type: string;
  quantity: number;
  saleTax: number;
  importTax: number;
  price: number;
  total: number;
  origin: string;
}