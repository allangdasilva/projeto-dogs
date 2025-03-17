import React from "react";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { UserContext } from "../../UserContext";

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
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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

          {error && <p>{error}</p>}
        </form>
      </section>
      <Link to={"create"}>Cadastro</Link>
    </>
  );
};

export default LoginForm;
