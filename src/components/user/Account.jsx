import UserHeader from "./UserHeader";
import { Outlet } from "react-router-dom";
import Head from "../helper/Head";
import { useSelector } from "react-redux";

const Account = () => {
  const { data } = useSelector((state) => state.user);
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
