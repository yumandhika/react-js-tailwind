import React from "react";
import { setToken } from "features/auth/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setToken(""));
  };

  return (
    <nav className="navbar border-b sticky top-0 bg-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">CMS</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li onClick={() => onLogout()}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
