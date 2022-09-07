import "./App.css";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main";
import Nav from "./components/Navigation/Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const user = useSelector((state) => state.AuthReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={user ? <Navigate to={"home"} /> : <Navigate to={"auth"} />}
        />
        <Route path="/home" element={user ? <Main /> : <Auth />} />
        <Route
          path="/auth"
          element={user ? <Navigate to={"home"} /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
