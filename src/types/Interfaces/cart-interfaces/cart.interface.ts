import { Products } from "../product-interfaces/product.interface";

export interface Cart {
  /**
   * Id: Cart Id
   */
  id: string | null;
  /**
   * Products: Array of poducts
   */
  products: Products[];
  /**
   * Total:  Total amount
   */
  totalAmount: number;
  /**
   * Total Products: Total products in the cart
   */
  totalProducts: number;
  /**
   * Total Quantity: Total Quantity of products in the cart
   */
  totalQuantity: number;
}
