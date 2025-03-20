import React from "react";
import Input from "../forms/Input";
import Button from "../forms/Button";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";
import { PASSWORD_LOST } from "../../api";

const LoginPasswordLost = () => {
  const login = useForm();
  const { request, error, loading, data } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("lost", "reset"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <>
      <section>
        <h1 className="title">Perdeu a senha?</h1>
        {data ? (
          <p style={{ color: "#4c1" }}>{data}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <Input
              label={"Email / Usuário"}
              type={"text"}
              name={"login"}
              {...login}
            />
            {loading ? (
              <Button disabled>Enviando...</Button>
            ) : (
              <Button>Enviar Email</Button>
            )}
          </form>
        )}

        <Error error={error} />
      </section>
    </>
  );
};

export default LoginPasswordLost;
