import { Categories } from "./product-categories.interface";
import { Products } from "./product.interface";

export interface FetchProductsResponse {
  products: Products[];
}

export interface FetchProductByIdResponse {
  product: Products;
}

export interface FetchProductCategories {
  categories: Categories[];
}
