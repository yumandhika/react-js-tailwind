import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onForgotPassword = () => {};

  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="text-3xl font-bold">Forgot Password</div>
        <div className="space-y-6">
          <form className="space-y-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="john@gmail.com"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </form>
          <div className="card-actions justify-end">
            <button
              onClick={() => onForgotPassword()}
              className="btn btn-primary w-full"
            >
              SUBMIT
            </button>
          </div>
          <div className="text-center">
            <span
              onClick={() => navigate(-1)}
              className="underline text-blue-900 cursor-pointer"
            >
              Kembali
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
