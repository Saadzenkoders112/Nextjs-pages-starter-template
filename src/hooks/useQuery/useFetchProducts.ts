import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  fetchProductById,
  fetchProducts,
} from "@/services/react-query-client/getProducts/products.service";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { Params } from "@/types/Interfaces/product-interfaces/product-params.interface";
import { ProductIdParams } from "@/types/Interfaces/product-interfaces/product-by-Id.interface";

interface FetchProductsResponse {
  products: Products[];
}

interface FetchProductByIdResponse {
  product: Products;
}

interface UseFetchProductsOptions
  extends UseQueryOptions<FetchProductsResponse, Error> {}

export const useFetchProducts = (
  params: Params,
  options?: UseFetchProductsOptions
): UseQueryResult<FetchProductsResponse, Error> => {
  return useQuery<FetchProductsResponse, Error>({
    queryKey: ["products", params],
    queryFn: () => fetchProducts(params),
    ...options,
  });
};

export const useFetchProductById = (
  params: ProductIdParams,
  options?: UseQueryOptions<
    FetchProductByIdResponse,
    Error
  >
): UseQueryResult<FetchProductByIdResponse, Error> => {
  return useQuery<FetchProductByIdResponse, Error>({
    queryKey: ["product", params.id],
    queryFn: () => fetchProductById(params),
    ...options,
  });
};
