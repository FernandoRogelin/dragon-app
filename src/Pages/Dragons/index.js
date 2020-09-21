import React, { useEffect, useState, useCallback } from "react";

import Routes from "../../Routes";
import { useHistory } from "react-router-dom";
import { Loading, Button, Wrapper } from "../../Components";
import { getDragons, deleteDragon } from "../../Services/Dragons";

import { Tr, Td, Table } from "./styles";

export default function Dragon() {
  const [dragons, setDragons] = useState("");
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const thead = ["Dragão", "Ações"];

  const fetchDragons = useCallback(async () => {
    try {
      const { data } = await getDragons();

      setDragons(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  async function DeleteDragon(id) {
    setLoading(true);

    try {
      await deleteDragon(id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      fetchDragons();
    }
  }

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  return (
    <Wrapper title="Timeline de Dragões">
      <Loading isLoading={loading} />
      <Button onClick={() => history.push(Routes.create)}>Adicionar</Button>
      <Table thead={thead}>
        {dragons
          ? dragons
              .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
              .map((dragon) => (
                <Tr key={dragon.id} data-testid="items">
                  <Td data-testid="nameDragon">{dragon.name}</Td>
                  <Td>
                    <Button
                      onClick={() =>
                        history.push({
                          pathname: Routes.edit,
                          state: { dragon },
                        })
                      }
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() =>
                        history.push({
                          pathname: Routes.detail,
                          state: { dragon },
                        })
                      }
                    >
                      Detalhes
                    </Button>
                    <Button
                      data-testid="deleteDragon"
                      onClick={() => DeleteDragon(dragon.id)}
                    >
                      Deletar
                    </Button>
                  </Td>
                </Tr>
              ))
          : null}
      </Table>
    </Wrapper>
  );
}
