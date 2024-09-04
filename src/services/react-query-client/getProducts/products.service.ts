import { GET } from "@/services/axios-request-handler";
import { URL } from "@/services/api-base-urls";
import { Params } from "@/types/Interfaces/product-interfaces/product-params.interface";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { ProductIdParams } from "@/types/Interfaces/product-interfaces/product-by-Id.interface";

interface FetchProductsResponse {
    products: Products[];
  }

  interface FetchProductByIdResponse {
    product: Products;
  }
  
export const fetchProducts = async (params: Params): Promise<FetchProductsResponse> => {
  try {   
    if (!params.limit) {
        throw new Error("Limit is required")
    }  
    const response: any = await GET(URL.FETCH_PRODUCTS(params.limit), params.token);
    return response;
  } catch (error) {
    throw new Error; 
  }
};

export const fetchProductById = async (params: ProductIdParams): Promise<FetchProductByIdResponse> => {
  try {    
    const response: any = await GET(URL.FETCH_PRODUCT_BY_ID(params.id), params.token);
    return response;
  } catch (error) {
    throw new Error; 
  }
};

