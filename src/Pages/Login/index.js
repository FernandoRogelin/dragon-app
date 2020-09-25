import React from "react";

import Routes from "../../Routes";
import Conta from "../../Utils/conta";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { InputForm, Button } from "../../Components";

import { Wrapper, Content, Title, Body, Error } from "./styles";

export default function Login() {
  let history = useHistory();

  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  async function onSubmit(values) {
    if (values.email === Conta.email && values.password === Conta.password) {
      localStorage.setItem("codUser", "4554");
      history.push(Routes.dragons);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Title>Acesse a sua conta</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Body>
            <InputForm
              type="email"
              name="email"
              testId="input-email"
              error={errors.email}
              placeholder="E-mail"
              ariaLabel="formulario email"
              refInput={register({
                required: "Campo obrigatório.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Formato do e-mail errado.",
                },
              })}
            />
            {errors.email && formState.touched.email && (
              <Error>{errors.email.message}</Error>
            )}
          </Body>
          <Body>
            <InputForm
              type="password"
              name="password"
              placeholder="Senha"
              testId="input-password"
              ariaLabel="formulario senha"
              error={errors.password}
              refInput={register({
                required: "Campo obrigatório.",
                validate: (value) => value.length > 5,
              })}
            />
            {errors.password && formState.touched.password && (
              <Error>{errors.password.message}</Error>
            )}
          </Body>
          <Button
            type="submit"
            aria-label="logar"
            data-testid="button-login"
            disabled={!formState.isValid || formState.isSubmitting}
          >
            Entrar
          </Button>
        </form>
      </Content>
    </Wrapper>
  );
}
