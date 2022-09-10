import React from "react";

import { Header, Sidebar } from "components";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <div className="hidden absolute mobile-menu overflow-none flex w-full">
        <div className="h-screen w-64 bg-opacity-90 bg-gray-300">
          mobile menu
          <button
            onclick="toggleMobileMenu()"
            className="border h-8 px-2 ml-4 bg-gray-100 shadow rounded-full hover:bg-gray-200"
          >
            toggle mobile
          </button>
        </div>
        <div className="w-full h-screen bg-opacity-80 bg-indigo-300"></div>
      </div>

      <div className="flex flex-col h-screen">
        <Header />
        <Sidebar>{children}</Sidebar>
      </div>
    </div>
  );
};

export default BasicLayout;
