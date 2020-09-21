import React from "react";

import { InputForm, Button } from "..";
import { useForm } from "react-hook-form";

import { Content, Form } from "./styles";

export default function ValidateForm({ onSubmit, value }) {
  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} id="formulario">
      <Content>
        <InputForm
          name="name"
          placeholder="Nome"
          error={errors.name}
          testId="input-name"
          value={value && value.name}
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
          value={value && value.type}
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
          value={value && value.createdAt}
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
        {value ? "Editar" : "Adicionar"}
      </Button>
    </Form>
  );
}
