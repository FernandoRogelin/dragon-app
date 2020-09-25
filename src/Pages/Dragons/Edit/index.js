import React, { useState } from "react";

import Routes from "../../../Routes";
import { editDragon } from "../../../Services/Dragons";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Loading, ValidateForm } from "../../../Components";

export default function Edit() {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const {
    state: { dragon },
  } = useLocation();

  async function onSubmit(values) {
    setLoading(true);

    try {
      await editDragon(dragon.id, values);

      history.push(Routes.dragons);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper
      nameButton="Voltar"
      title="Editar um dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Loading isLoading={loading} />
      <ValidateForm onSubmit={onSubmit} value={dragon} />
    </Wrapper>
  );
}
