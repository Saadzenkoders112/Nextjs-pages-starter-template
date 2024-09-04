import { GET } from "@/services/axios-request-handler";
import { URL } from "@/services/api-base-urls";
import { Params } from "@/types/Interfaces/product-interfaces/product-params.interface";
import { ProductIdParams } from "@/types/Interfaces/product-interfaces/product-by-Id.interface";
import { FetchProductByIdResponse, FetchProductCategories, FetchProductsResponse } from "@/types/Interfaces/product-interfaces/product-response.interface";
  
export const fetchProducts = async (params: Params): Promise<FetchProductsResponse> => {
  try {   
    if (!params.limit || !params.category) {
        throw new Error("Limit is required and category is required")
    }  
    const response: any = await GET(URL.FETCH_PRODUCTS(params.limit, params.category), params.token);
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

export const fetchProductCategories = async (params: Params): Promise<FetchProductCategories> => {
  try {    
    const response: any = await GET(URL.FETCH_PRODUCT_CATEGORIES, params.token);
    return response;
  } catch (error) {
    throw new Error; 
  }
}

