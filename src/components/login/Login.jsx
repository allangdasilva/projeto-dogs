import React from "react";
import styles from "./Login.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (login) {
      navigate("/account");
    }
  }, [login, navigate]);
  return (
    <>
      <section className={styles.login}>
        <div className={styles.forms}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Login;
