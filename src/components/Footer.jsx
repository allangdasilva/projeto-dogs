import React from "react";
import styles from "./Footer.module.css";
import DogFooterSvg from "../assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <>
      <footer className={`${styles.footer}`}>
        <DogFooterSvg />
        <p>Dogs. Alguns direitos reservados.</p>
      </footer>
    </>
  );
};

export default Footer;
