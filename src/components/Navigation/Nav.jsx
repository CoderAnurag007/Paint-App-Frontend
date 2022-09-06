import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../Actions/AuthActions";
import "./Nav.css";
const Nav = () => {
  const userdata = useSelector((state) => state.AuthReducer.authData);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(Logout());
  };
  return (
    <div className="navbar">
      <h3>Paint-App</h3>
      <div className="userbox">
        <div className="detail">
          <h3>
            {" "}
            {userdata
              ? "Welcome " +
                userdata.user.firstname +
                " " +
                userdata.user.lastname
              : ""}
          </h3>
        </div>
        <div className="logout">
          {userdata ? (
            <button className="logoutbtn" onClick={handleLogOut}>
              LogOut
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
