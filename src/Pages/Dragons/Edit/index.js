import React, { useState } from "react";

import Routes from "../../../Routes";
import { useForm } from "react-hook-form";
import { editDragon } from "../../../Services/Dragons";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Loading, InputForm, Button } from "../../../Components";

import { Content } from "./styles";

export default function Edit() {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const {
    state: { dragon },
  } = useLocation();

  const { handleSubmit, register, errors, formState } = useForm({
    mode: "onChange",
  });

  async function onSubmit(values) {
    setLoading(true);

    try {
      await editDragon(dragon.id, values);

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
      title="Editar um dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Loading isLoading={loading} />
      <form onSubmit={handleSubmit(onSubmit)} id="formulario">
        <Content>
          <InputForm
            name="name"
            value={dragon.name}
            placeholder="Nome"
            error={errors.name}
            ariaLabelledby="formulario nome"
            refInput={register({
              required: "Campo obrigatório.",
            })}
          />
          <InputForm
            name="type"
            placeholder="Tipo"
            error={errors.type}
            value={dragon.type}
            ariaLabelledby="formulario tipo"
            refInput={register({
              required: "Campo obrigatório.",
            })}
          />
          <InputForm
            name="createdAt"
            mask="99/99/9999"
            value={dragon.createdAt}
            error={errors.createdAt}
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
          disabled={!formState.isValid || formState.isSubmitting}
        >
          Editar
        </Button>
      </form>
    </Wrapper>
  );
}
