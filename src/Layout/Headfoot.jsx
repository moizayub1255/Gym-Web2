import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Headfoot = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "76vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Headfoot;