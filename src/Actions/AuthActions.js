import * as Authapi from "../api/AuthApi";

export const SignUp = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.SignUpRoute(FormData);
    await dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const Login = (FormData) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await Authapi.LoginRoute(FormData);
    await dispatch({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const Logout = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
