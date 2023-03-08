import React from "react";

// hooks
import useViewport from "hooks/useViewport";

// components
import Footer from "./Footer";
import Header from "./Header/Header";
import PageLayout from "./PageLayout";

const Layout = ({ children }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />
      <PageLayout className="flex-1 flex [&>*]:w-full">{children}</PageLayout>
      <Footer />
    </div>
  );
};

export default Layout;
