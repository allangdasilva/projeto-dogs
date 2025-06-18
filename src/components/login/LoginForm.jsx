import styles from "./LoginForm.module.css";
import stylesBtn from "../forms/Button.module.css";
import { Link } from "react-router-dom";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import Error from "../helper/Error";
import Head from "../helper/Head";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/user";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { user, token } = useSelector((state) => state);
  const dispatch = useDispatch();
  const loading = user.loading || token.loading;
  const error = user.error || token.error;

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
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
