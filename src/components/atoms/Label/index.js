import React from "react";

const Label = ({ text = "", className = "", ...props }) => {
  return (
    <div {...props} className={className}>
      {text}
    </div>
  );
};

export default Label;
