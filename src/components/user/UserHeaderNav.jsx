import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import FeedSvg from "../../assets/feed.svg?react";
import EstatisticasSvg from "../../assets/estatisticas.svg?react";
import AdicionarSvg from "../../assets/adicionar.svg?react";
import SairSvg from "../../assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../hooks/useMedia";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/user";

const UserHeaderNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(userLogout());
    navigate("/login");
  }

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        } ${!mobile && "headerNav"}`}
      >
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
