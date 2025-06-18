import Input from "../forms/Input";
import Button from "../forms/Button";
import Error from "../helper/Error";
import useForm from "../../hooks/useForm";
import { USER_POST } from "../../api";
import useFetch from "../../hooks/useFetch";
import Head from "../helper/Head";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/user";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok)
      dispatch(
        userLogin({ username: username.value, password: password.value })
      );
  }

  const { loading, error, request } = useFetch();

  return (
    <>
      <section className="animeLeft">
        <Head title={"Crie sua conta"} description={"Criar conta"} />
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label={"Usuário"}
            name={"username"}
            type={"text"}
            {...username}
          />
          <Input label={"Email"} name={"email"} type={"email"} {...email} />
          <Input
            label={"Senha"}
            name={"password"}
            type={"password"}
            {...password}
          />
          {loading ? (
            <Button disabled>Cadastrando...</Button>
          ) : (
            <Button>Cadastrar</Button>
          )}
          <Error error={error} />
        </form>
      </section>
    </>
  );
};

export default LoginCreate;
