import { Inter } from "next/font/google";
import { useFetchProducts } from "@/hooks/useQuery/useFetchProducts";
import { getCookieFn } from "@/utils/storage.util";
import Card from "@/components/card";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [limit, setLimit] = useState<number>(5)
  const token = getCookieFn("projectToken");
  if (!token) {
    return <div>Error: No token found</div>; // Handle missing token
  }
  const params = { token, limit };
  const { data, isLoading } = useFetchProducts(params);
  console.log(data);
  return (
    <main className="p-2 overflow-x-hidden">
      <div>Products</div>
      <div className="flex gap-4 flex-wrap p-1 justify-center">
        {isLoading ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <div>Loading...</div>
          </div>
        ) : (
          data?.products?.map((product) => <Card product={product} />)
        )}
      </div>
      <div className="flex justify-center w-screen p-4">
        <button onClick={() => setLimit(limit+5)} className="p-1 w-[200px] border border-slate-200">Load more ...</button>
      </div>
    </main>
  );
}
