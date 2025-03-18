import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import FeedSvg from "../../assets/feed.svg?react";
import EstatisticasSvg from "../../assets/estatisticas.svg?react";
import AdicionarSvg from "../../assets/adicionar.svg?react";
import SairSvg from "../../assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <>
      <nav className={`${styles.nav} headerNav`}>
        <NavLink to={"/account"} end>
          <FeedSvg />
          {mobile && "Minha Fotos"}
        </NavLink>
        <NavLink to={"/account/stats"}>
          <EstatisticasSvg />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to={"/account/post"}>
          <AdicionarSvg />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <SairSvg />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
