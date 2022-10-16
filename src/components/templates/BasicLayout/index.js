import React from "react";

import { Header, Sidebar, Footer } from "components";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {children}
      <Footer/>
    </div>
  );
};

export default BasicLayout;
