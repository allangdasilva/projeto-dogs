import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import DogSvg from "../assets/dogs.svg?react";
import { useSelector } from "react-redux";

const Header = () => {
  const { data } = useSelector((state) => state.user);
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
