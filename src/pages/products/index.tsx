import { Inter } from "next/font/google";
import { useFetchCategories, useFetchProducts } from "@/hooks/useQuery/useFetchProducts";
import { getCookieFn } from "@/utils/storage.util";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { Products } from "@/types/Interfaces/product-interfaces/product.interface";
import { GetServerSideProps } from "next";
import { fetchProducts } from "@/services/react-query-client/Product Services/products.service";
import { Params } from "@/types/Interfaces/product-interfaces/product-params.interface";
import Layout from "@/components/layout/layout";
import { Categories } from "@/types/Interfaces/product-interfaces/product-categories.interface";

// const inter = Inter({ subsets: ["latin"] });

interface HomePageProps {
  initialProducts: Products[] | null;
}

export default function Home({ initialProducts }: HomePageProps) {
  const [products, setProducts] = useState<Products[] | null>(initialProducts);
  const [limit, setLimit] = useState<number>(5);
  const [category, setCategory] = useState<string | null>(null)
  const token = getCookieFn("projectToken");

  const params = { token: token || "", limit, category };
  const { data, isLoading } = useFetchProducts(params);

  // QUERY TO FETCH ALL CATEGORIES
  const {data: categories, isLoading: isCategoriesLoading} = useFetchCategories({token: token || ""})

  useEffect(() => {
    if (data && data.products) {
      setProducts(data.products);
    }
  }, [data, token]);
  if (!categories || categories?.categories?.length === 0) {
    return <div>No items for this category!</div>
  }


  return (
    <Layout title="Products">
      <main className="p-2 overflow-x-hidden">
        <div className="text-2xl font-semibold p-2 text-center mb-10">Products</div>
        <div className="flex justify-end p-4">
          <select onChange={(e) => setCategory(e.target.value)} className="cursor-pointer focus:outline-none focus:border focus:border-slate-300 rounded-lg">
            {categories?.map((category: Categories) => (
              <option value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
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
    </Layout>
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
