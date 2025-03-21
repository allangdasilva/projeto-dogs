import React from "react";
import styles from "./LoginForm.module.css";
import stylesBtn from "../forms/Button.module.css";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import Error from "../helper/Error";
import { UserContext } from "../../UserContext";
import Head from "../helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <>
      <section className="animeLeft">
        <Head title={"Login"} description={"Login"} />
        <h1 className="title">Login</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label={"Usuário"}
            name={"username"}
            type={"text"}
            {...username}
          />
          <Input
            label={"Senha"}
            name={"password"}
            type={"password"}
            {...password}
          />
          {loading ? (
            <Button disabled>Carregando</Button>
          ) : (
            <Button>Entrar</Button>
          )}

          {error && <Error error={error && "Dados incorretos"} />}
        </form>
        <Link className={styles.lost} to={"lost"}>
          Perdeu a Senha?
        </Link>
        <div className={styles.createWrapper}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to={"create"}>
            Cadastro
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
