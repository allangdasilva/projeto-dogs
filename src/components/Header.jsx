import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogSvg from "../assets/dogs.svg?react";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <>
      <header className={styles.header}>
        <nav className={`${styles.nav} container`}>
          <Link
            className={styles.logo}
            to={"/projeto-dogs"}
            aria-label="Dogs - Home"
          >
            <DogSvg />
          </Link>
          {data ? (
            <Link className={styles.login} to={"account"}>
              {data.nome}
            </Link>
          ) : (
            <Link className={styles.login} to={"login"}>
              Login / Criar
            </Link>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
