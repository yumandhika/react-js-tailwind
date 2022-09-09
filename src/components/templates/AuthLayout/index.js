import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-1 justify-center items-center h-screen bg-slate-100">
      {children}
    </div>
  );
};

export default AuthLayout;
