import { fetchProductById } from "@/services/react-query-client/Product Services/products.service";
import { ProductIdParams } from "@/types/Interfaces/product-interfaces/product-by-Id.interface";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";

interface ProductIdProps {
  initialProduct: Products | null;
}

const ProductDetails: React.FC<ProductIdProps> = ({
  initialProduct,
}: ProductIdProps) => {
  console.log(initialProduct);
  return (
    <div className="w-screen h-screen flex justify-center mt-10">
      <div className="p-2 flex justify-center gap-2 w-[800px]">
        <div className="w-full">
          <Image
            className="aspect-square object-contain"
            src={initialProduct?.thumbnail || "./public/assets/images/bg.png"}
            alt="Product image"
            height={300}
            width={300}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between font-semibold">
            <p className="text-xl">{initialProduct?.title}</p>
            <p>${initialProduct?.price}</p>
          </div>
          <div>
            <p className="text-lg font-semibold">Description</p>
            <p className="text-sm">{initialProduct?.description}</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <p>Category: {initialProduct?.category}</p>
            <p className="bg-red-500 text-white p-1 rounded-lg">
              Discount: {initialProduct?.discountPercentage}%
            </p>
          </div>
          <button className="p-1 w-[100px] text-white bg-blue-500 font-semibold cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.projectToken;
  const id = Array.isArray(context.query.id)
    ? context.query.id[0]
    : context.query.id;
  if (!token) {
    return {
      props: {
        error: "Token is missing",
      },
    };
  }

  const params: ProductIdParams = { token, id: id || "" };

  try {
    const response = await fetchProductById(params);
    return {
      props: {
        initialProduct: response || [],
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return {
      props: {
        error: "Failed to fetch products",
      },
    };
  }
};

export default ProductDetails;
