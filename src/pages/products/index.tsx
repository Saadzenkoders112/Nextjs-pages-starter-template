import { Inter } from "next/font/google";
import { useFetchProducts } from "@/hooks/useQuery/useFetchProducts";
import { getCookieFn } from "@/utils/storage.util";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { GetServerSideProps } from "next";
import { fetchProducts } from "@/services/react-query-client/getProducts/products.service";
import { Params } from "@/types/Interfaces/product-interfaces/product-params.interface";

// const inter = Inter({ subsets: ["latin"] });

interface HomePageProps {
  initialProducts: Products[] | null;
}

export default function Home({ initialProducts }: HomePageProps) {
  const [products, setProducts] = useState<Products[] | null>(initialProducts);
  const [limit, setLimit] = useState<number>(5);
  const token = getCookieFn("projectToken");

  const params = { token: token || "", limit };
  const { data, isLoading } = useFetchProducts(params);

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data, token]);

  return (
    <main className="p-2 overflow-x-hidden">
      <div>Products</div>
      <div className="flex gap-4 flex-wrap p-1 justify-center">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          products?.map((product) => (
            <Card key={product.id} product={product} />
          ))
        )}
      </div>
      <div className="flex justify-center w-screen p-4">
        <button
          onClick={() => setLimit(limit + 5)}
          className="p-1 w-[200px] border border-slate-200"
        >
          Load more ...
        </button>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.projectToken;
  const limit = 5;

  if (!token) {
    return {
      props: {
        error: "Token is missing",
      },
    };
  }
  const params: Params = { token, limit };

  try {
    const response = await fetchProducts(params);
    return {
      props: {
        initialProducts: response?.products || [],
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
