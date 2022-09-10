import React from "react";

const Input = React.forwardRef(
  ({ className = "", hookForm = {}, ...props }, ref) => (
    <input ref={ref} {...hookForm} {...props} className={className} />
  ),
);

export default Input;
