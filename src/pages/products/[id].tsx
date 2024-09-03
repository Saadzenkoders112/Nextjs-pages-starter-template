import { useFetchProductById } from "@/hooks/useQuery/useFetchProducts";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { getCookieFn } from "@/utils/storage.util";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface ProductIdProps {
  product: Products;
}

const ProductDetails: React.FC<ProductIdProps> = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const token = getCookieFn("projectToken");
  if (!token || !id) {
    return <div>Error: No token or Id found</div>; // Handle missing token
  }
  const params = { token, id };
  const { data: product, isLoading } = useFetchProductById(params);
  console.log(product);
  return (
    <div className="w-screen h-screen flex justify-center mt-10">
      <div className="p-2 flex justify-center gap-2 w-[800px]">
        <div className="w-full">
          <Image
          className="aspect-square object-contain"
            src={product?.thumbnail}
            alt="Product image"
            height={300}
            width={300}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between font-semibold">
            <p className="text-xl">{product?.title}</p>
            <p>${product?.price}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Description</p>
            <p className="text-sm">{product?.description}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <p>Category: {product?.category}</p>
            <p className="bg-red-500 text-white p-1 rounded-lg">Discount: {product?.discountPercentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
