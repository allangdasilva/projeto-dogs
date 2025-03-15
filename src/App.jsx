import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import LoginForm from "./components/login/LoginForm";
import LoginCreate from "./components/login/LoginCreate";
import LoginPasswordLost from "./components/login/LoginPasswordLost";
import LoginPasswordReset from "./components/login/LoginPasswordReset";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />}>
              <Route path="" element={<LoginForm />} />
              <Route path="create" element={<LoginCreate />} />
              <Route path="lost" element={<LoginPasswordLost />} />
              <Route path="reset" element={<LoginPasswordReset />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
