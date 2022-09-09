import { setToken } from "features/auth/authSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import _ from "lodash";

import { Button, InputValidation } from "components";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    setError,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // _.isEmpty(errors) && dispatch(setToken("fakeToken"));
    data && dispatch(setToken("fakeToken"));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="text-3xl font-bold">Login</div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <InputValidation
              hookForm={register("email", {
                required: { value: true, message: "Email wajib diisi" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Format email tidak valid",
                },
              })}
              label="Email"
              type="text"
              placeholder="john@gmail.com"
              isError={{ value: errors.email, message: errors.email?.message }}
            />
            <InputValidation
              hookForm={register("password", {
                required: { value: true, message: "Password wajib diisi" },
                minLength: {
                  value: 8,
                  message: "Password minimal 8 karakter",
                },
              })}
              label="Password"
              type="text"
              placeholder="123456789"
              isError={{
                value: errors.password,
                message: errors.password?.message,
              }}
            />
            {/* <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: { value: true, message: "Password wajib diisi" },
                  minLength: {
                    value: 8,
                    message: "Password minimal 8 karakter",
                  },
                })}
                type="text"
                placeholder="123456789"
                className={`input w-full max-w-xs ${
                  errors.password ? "input-error" : "input-bordered"
                }`}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.password?.message}
                  </span>
                </label>
              )}
            </div> */}
          </div>
          <div className="card-actions justify-end">
            <Button label="Masuk" theme="primary" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
