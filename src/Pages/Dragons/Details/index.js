import React, { useState, useEffect, useCallback } from "react";

import Routes from "../../../Routes";
import { useHistory, useLocation } from "react-router-dom";
import { Wrapper, Loading } from "../../../Components";
import { getDetailsDragon } from "../../../Services/Dragons";

import { Content, Title, Text } from "./styles";

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [dragon, setDragon] = useState([]);

  let history = useHistory();
  let {
    state: { id },
  } = useLocation();

  const fetchDragon = useCallback(async () => {
    try {
      const { data } = await getDetailsDragon(id);

      setDragon(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDragon();
  }, [fetchDragon]);

  return (
    <Wrapper
      nameButton="Voltar"
      title="Detalhes do dragão"
      onClick={() => history.push(Routes.dragons)}
    >
      <Loading isLoading={loading} />
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
