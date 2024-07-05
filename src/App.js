import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Login } from "./Pages/Login.js";
import { Home } from "./Pages/Home.js";
import { Signin } from "./Pages/Signin.js";
import { DashBoard } from "./Pages/DashBoard.js";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div
      className=" bg-[#010B13] w-screen h-screen overflow-y-hidden 
    "
    >
      <NavBar setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}></NavBar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/login"
          element={
            <Login setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}></Login>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <Signin setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn}></Signin>
          }
        ></Route>

        <Route path="/dashboard" element={<DashBoard></DashBoard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
