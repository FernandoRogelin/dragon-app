import React, { useState } from "react";

import Routes from "../../../Routes";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { createDragon } from "../../../Services/Dragons";
import { Wrapper, InputForm, Button, Loading } from "../../../Components";

import { Content, Form } from "./styles";

export default function Create() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  async function onSubmit(values) {
    setLoading(true);

    try {
      await createDragon(values);

      history.push(Routes.dragons);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper
      nameButton="Voltar"
      title="Criar novo dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Loading isLoading={loading} />
      <Form onSubmit={handleSubmit(onSubmit)} id="formulario">
        <Content>
          <InputForm
            name="name"
            placeholder="Nome"
            error={errors.name}
            testId="input-name"
            ariaLabelledby="formulario nome"
            refInput={register({
              required: "Campo obrigatório.",
            })}
          />
          <InputForm
            name="type"
            placeholder="Tipo"
            error={errors.type}
            testId="input-type"
            ariaLabelledby="formulario tipo"
            refInput={register({
              required: "Campo obrigatório.",
            })}
          />
          <InputForm
            name="createdAt"
            mask="99/99/9999"
            error={errors.createdAt}
            testId="input-createdAt"
            placeholder="Data de criação"
            ariaLabelledby="formulario data"
            refInput={register({
              required: "Campo obrigatório.",
            })}
          />
        </Content>
        <Button
          type="submit"
          aria-label="logar"
          data-testid="button-create"
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Adicionar
        </Button>
      </Form>
    </Wrapper>
  );
}
