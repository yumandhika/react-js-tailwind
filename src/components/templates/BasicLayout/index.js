import React from "react";

import { Header, Sidebar } from "components";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default BasicLayout;
