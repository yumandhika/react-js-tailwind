import React from "react";

const Button = ({
  label = "",
  theme = "",
  outline = false,
  size = "",
  type = "",
  className = "",
  onClick,
}) => {
  const themeHandler = (val) => {
    switch (val) {
      case "primary":
        return `btn-primary`;
      case "secondary":
        return `btn-secondary`;
      case "accent":
        return `btn-accent`;
      case "info":
        return `btn-info`;
      case "success":
        return `btn-success`;
      case "warning":
        return `btn-warning`;
      case "error":
        return `btn-error`;
      case "active":
        return `btn-active`;
      case "ghost":
        return `btn-ghost`;
      case "link":
        return `btn-link`;
      default:
        return "";
    }
  };

  const sizeHandler = (val) => {
    switch (val) {
      case "xl":
        return `btn-xl`;
      case "lg":
        return `btn-lg`;
      case "md":
        return `btn-md`;
      case "sm":
        return `btn-sm`;
      case "xs":
        return `btn-xs`;
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${themeHandler(theme)} ${
        outline && "btn-outline"
      } ${sizeHandler(size)} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
