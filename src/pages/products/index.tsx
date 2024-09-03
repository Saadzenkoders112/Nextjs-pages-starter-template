import Image from "next/image";
import { Inter } from "next/font/google";
import { useFetchProducts } from "@/hooks/useQuery/useFetchProducts";
import { getCookieFn } from "@/utils/storage.util";
import Card from "@/components/card";
import { useState } from "react";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { GetServerSideProps } from "next";
import { fetchProducts } from "@/services/react-query-client/getProducts/products.service";

const inter = Inter({ subsets: ["latin"] });

interface HomePageProps {
  products: Products[] | null;
  error?: string;
}

export default function Home({ products, error }: HomePageProps) {
  const [limit, setLimit] = useState<number>(5)
  const token = getCookieFn("projectToken");
  if (!token) {
    return <div>Error: No token found</div>; // Handle missing token
  }
  const params = { token, limit };
  const { data, isLoading } = useFetchProducts(params);
  // console.log(data);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found</div>;
  }

  return (
    <main className="p-2 overflow-x-hidden">
      <div>Products</div>
      <div className="flex gap-4 flex-wrap p-1 justify-center">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
    // <main className="p-2 overflow-x-hidden">
    //   <div>Products</div>
    //   <div className="flex gap-4 flex-wrap p-1 justify-center">
    //     {isLoading ? (
    //       <div className="w-screen h-screen flex justify-center items-center">
    //         <div>Loading...</div>
    //       </div>
    //     ) : (
    //       data?.products?.map((product) => <Card product={product} />)
    //     )}
    //   </div>
    //   <div className="flex justify-center w-screen p-4">
    //     <button onClick={() => setLimit(limit+5)} className="p-1 w-[200px] border border-slate-200">Load more ...</button>
    //   </div>
    // </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const [limit, setLimit] = useState<number>(5)
  // const token = getCookieFn("projectToken");
  if (!token) {
    return <div>Error: No token found</div>; // Handle missing token
  }
  const params = { token, limit };

  if (!token) {
    return {
      props: {
        error: "Token is missing",
      },
    };
  }

  try {
    const { data, isLoading } = useFetchProducts(params);

    return {
      props: {
        products: data?.products || [],
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
