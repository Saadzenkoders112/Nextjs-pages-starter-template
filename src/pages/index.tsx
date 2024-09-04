import { Inter } from "next/font/google";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home">
      <main className="p-2 overflow-x-hidden"></main>
    </Layout>
  );
}
