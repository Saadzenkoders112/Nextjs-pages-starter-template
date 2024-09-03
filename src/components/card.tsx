import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  product: Products;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="w-[220px] h-auto flex flex-col p-2 bg-white border border-slate-300 cursor-pointer hover:scale-105 duration-200"
    >
      <div className="flex justify-center items-center relative">
        <Image
          className="aspect-square object-contain"
          src={product.thumbnail}
          alt="Product image"
          height={200}
          width={200}
        />
        <div className="absolute -top-5 -right-5 p-2 rounded-full bg-red-500 text-white font-semibold text-xs">
          {product.discountPercentage}% discount
        </div>
      </div>
      <div className="text-sm">
        <div className="flex justify-between font-semibold">
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
        <div className="text-gray-500 flex gap-2">
          <p className="font-semibold">Rating: </p>
          <p>{product.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
