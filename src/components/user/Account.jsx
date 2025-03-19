import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Account = () => {
  const { data } = React.useContext(UserContext);
  const user = data.id;
  return (
    <>
      <section className="container">
        <UserHeader />
        <Outlet context={{ user }} />
      </section>
    </>
  );
};

export default Account;
