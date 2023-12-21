import React from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="p-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
