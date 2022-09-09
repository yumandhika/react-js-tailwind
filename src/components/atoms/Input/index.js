import React from "react";

const Input = ({ className = "", hookForm = {}, ...props }) => {
  return <input {...hookForm} {...props} className={className} />;
};

export default Input;
