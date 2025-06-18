import React from "react";
import styles from "./Login.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../helper/Loading";

const Login = () => {
  const { data, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) {
      navigate("/account");
    }
  }, [data, navigate]);
  if (loading) return <Loading />;
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
