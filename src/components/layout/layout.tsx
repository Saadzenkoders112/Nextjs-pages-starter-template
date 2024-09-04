import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../commons/navbar";
import Footer from "../commons/footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title  }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer className=" ">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
