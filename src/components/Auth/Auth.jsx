import React from "react";
import { useState } from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { Login, SignUp } from "../../Actions/AuthActions";

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignup, setisSignup] = useState(true);
  const [confirmPass, setconfirmPass] = useState(true);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    setconfirmPass(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (data.password === data.confirmPass) {
        dispatch(SignUp(data));
      } else {
        setconfirmPass(false);
      }
    } else {
      dispatch(Login(data));
    }
  };

  return (
    <div className="authbox">
      <div className="welcome_text">
        <h2>Welcome To The Paint App</h2>
      </div>
      <div className="formbox">
        <form action="" className="form">
          <h3>{isSignup ? "SignUp" : "Login"}</h3>
          <div>
            {isSignup && (
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Firstname"
                  name="firstname"
                  //   required={true}
                  onChange={handleChange}
                  value={data.firstname}
                />
                <input
                  type="text"
                  placeholder="Enter Your Lastname"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                />
              </div>
            )}
            <input
              type="text"
              placeholder="Username"
              name="username"
              //   required={true}
              onChange={handleChange}
              value={data.username}
            />
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              //   required={true}
              onChange={handleChange}
              value={data.password}
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPass"
                // required={true}
                onChange={handleChange}
                value={data.confirmPass}
              />
            )}
            <div>
              <br />
              {!confirmPass && (
                <span
                  style={{
                    color: "red",
                    backgroundColor: "white",
                    padding: "2px",
                  }}
                >
                  *Passwords Are Not Matching
                </span>
              )}
              <br />
              <span>
                {isSignup
                  ? "Already have an Account "
                  : "Don't Have an Account"}{" "}
                ?{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "blue",
                  }}
                  onClick={() => {
                    setisSignup(!isSignup);
                  }}
                >
                  {isSignup ? "Login" : "SignUp"}
                </span>
              </span>
            </div>
          </div>
          <button type="submit" className="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
