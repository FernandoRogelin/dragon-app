import React, { useEffect, useCallback, useReducer } from "react";

import Routes from "../../Routes";
import { useHistory } from "react-router-dom";
import reducerDragon from "../../Reducers/reducer";
import { Loading, Button, Wrapper } from "../../Components";
import { getDragons, deleteDragonId } from "../../Services/Dragons";

import { Tr, Td, Table } from "./styles";

export default function Dragon() {
  const initialState = { dragon: [], loading: true };
  const [state, dispatch] = useReducer(reducerDragon, initialState);

  const history = useHistory();
  const thead = ["Dragão", "Ações"];

  const fetchDragons = useCallback(async () => {
    try {
      const { data } = await getDragons();

      dispatch({ type: "SET_DRAGON_LIST", payload: data, loading: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function deleteDragon(id) {
    dispatch({ type: "SET_LOADING", loading: true });

    try {
      await deleteDragonId(id);
    } catch (error) {
      console.log(error);
    } finally {
      fetchDragons();
    }
  }

  useEffect(() => {
    fetchDragons();
  }, [fetchDragons]);

  return (
    <Wrapper title="Timeline de Dragões">
      <Loading isLoading={state.loading} />
      <Button onClick={() => history.push(Routes.create)}>Adicionar</Button>
      <Table thead={thead}>
        {state.dragons
          ? state.dragons
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
                      onClick={() => deleteDragon(dragon.id)}
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
