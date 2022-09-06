import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const SignUpRoute = (FormData) => {
  return API.post("/auth/register", FormData, {
    headers: { "Content-Type": "application/json" },
  });
};

export const LoginRoute = (FormData) =>
  API.post("/auth/login", FormData, {
    headers: { "Content-Type": "application/json" },
  });
