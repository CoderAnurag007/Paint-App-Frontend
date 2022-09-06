import "./App.css";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main";
import Nav from "./components/Navigation/Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.AuthReducer.authData);
  console.log(user, "from app");
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="*"
          element={
            !user == null ? (
              <Navigate to={"/home"} />
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />
        <Route path="/home" element={user ? <Main /> : <Auth />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
