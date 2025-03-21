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
import Account from "./components/user/Account";
import Feed from "./components/feed/Feed";
import Photo from "./components/photo/Photo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./components/helper/ProtectedRoute";
import UserPhotoPost from "./components/user/UserPhotoPost";
import UserStats from "./components/user/UserStats";
import UserProfile from "./components/user/UserProfile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <Header />
            <main className="AppMain">
              <Routes>
                <Route path="/projeto-dogs" element={<Home />} />
                <Route path="login" element={<Login />}>
                  <Route path="" element={<LoginForm />} />
                  <Route path="create" element={<LoginCreate />} />
                  <Route path="lost" element={<LoginPasswordLost />} />
                  <Route path="reset" element={<LoginPasswordReset />} />
                </Route>
                <Route
                  path="account"
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                >
                  <Route path="" element={<Feed />} />
                  <Route path="post" element={<UserPhotoPost />} />
                  <Route path="stats" element={<UserStats />} />
                </Route>
                <Route path="photo/:id" element={<Photo />} />
                <Route path="profile/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
