import React from "react";

// hooks
import useViewport from "hooks/useViewport";

// components
// import Footer from "./Footer";
import PageLayout from "./PageLayout";
import Header from "./Header/Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  const { height: minHeight } = useViewport("px");

  return (
    <div style={{ minHeight }} className="flex flex-col">
      <Header />
      <PageLayout className="flex-1 flex [&>*]:w-full mt-[64px]">{children}</PageLayout>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
