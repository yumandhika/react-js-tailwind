import React from "react";
import { Input } from "components";

const InputValidation = ({
  isError = {
    value: false,
    message: "",
  },
  hookForm = {},
  label = "",
  className,
  ...props
}) => {
  return (
    <div className="form-control w-full max-w-xs">
      {label && (
        <label className="label">
          <span className={`label-text ${isError?.value ? "text-error" : ""}`}>
            {label}
          </span>
        </label>
      )}
      <Input
        {...props}
        hookForm={hookForm}
        className={
          className
            ? className
            : `input w-full max-w-xs ${
                isError?.value ? "input-error" : "input-bordered"
              }`
        }
      />
      {isError?.value && (
        <label className="label">
          <span className="label-text-alt text-error">{isError?.message}</span>
        </label>
      )}
    </div>
  );
};

export default InputValidation;
