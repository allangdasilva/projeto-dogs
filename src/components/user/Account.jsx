import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";

const Account = () => {
  return (
    <>
      <section className="container">
        <UserHeader />
        <Outlet />
      </section>
    </>
  );
};

export default Account;
