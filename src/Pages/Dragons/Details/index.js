import React, { useState, useEffect, useCallback } from "react";

import Routes from "../../../Routes";
import { Wrapper } from "../../../Components";
import { useHistory, useLocation } from "react-router-dom";

import { Content, Title, Text } from "./styles";

export default function Details() {
  const [dragonEdit, setDragonEdit] = useState([]);

  let history = useHistory();
  let {
    state: { dragon },
  } = useLocation();

  const fetchDragon = useCallback(async () => {
    setDragonEdit(dragon);
  }, [dragon]);

  useEffect(() => {
    fetchDragon();
  }, [fetchDragon]);

  return (
    <Wrapper
      nameButton="Voltar"
      title="Detalhes do dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Content>
        {dragonEdit ? (
          <>
            <Title>Nome:</Title>
            <Text>{dragonEdit.name}</Text>
            <Title>Tipo do dragão:</Title>
            <Text>{dragonEdit.type}</Text>
            <Title>Data de Criação:</Title>
            <Text>{dragonEdit.createdAt}</Text>
          </>
        ) : null}
      </Content>
    </Wrapper>
  );
}
