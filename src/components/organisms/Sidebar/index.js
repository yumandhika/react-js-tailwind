import React from "react";

const Sidebar = ({ children }) => {
  return (
    <div className="flex flex-1">
      <div className="w-80 border-r">asd</div>
      <div className="w-full m-6">{children}</div>
    </div>
  );
};

export default Sidebar;
