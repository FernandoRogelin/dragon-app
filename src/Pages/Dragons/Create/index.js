import React, { useState } from "react";

import Routes from "../../../Routes";
import { useHistory } from "react-router-dom";
import { createDragon } from "../../../Services/Dragons";
import { Wrapper, Loading, ValidateForm } from "../../../Components";

export default function Create() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

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
      <ValidateForm onSubmit={onSubmit} />
    </Wrapper>
  );
}
