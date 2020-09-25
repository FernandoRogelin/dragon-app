import React from "react";

import Routes from "../../../Routes";
import { Wrapper } from "../../../Components";
import { useHistory, useLocation } from "react-router-dom";

import { Content, Title, Text } from "./styles";

export default function Details() {
  let history = useHistory();
  let {
    state: { dragon },
  } = useLocation();

  return (
    <Wrapper
      nameButton="Voltar"
      title="Detalhes do dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Content>
        {dragon ? (
          <>
            <Title>Nome:</Title>
            <Text>{dragon.name}</Text>
            <Title>Tipo do dragão:</Title>
            <Text>{dragon.type}</Text>
            <Title>Data de Criação:</Title>
            <Text>{dragon.createdAt}</Text>
          </>
        ) : null}
      </Content>
    </Wrapper>
  );
}
