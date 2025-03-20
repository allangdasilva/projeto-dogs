import React from "react";
import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Head from "../helper/Head";

const Account = () => {
  const { data } = React.useContext(UserContext);
  const user = data.id;
  return (
    <>
      <section className="container">
        <Head title={"Minha conta"} description={"Conta do usuário"} />
        <UserHeader />
        <Outlet context={{ user }} />
      </section>
    </>
  );
};

export default Account;
