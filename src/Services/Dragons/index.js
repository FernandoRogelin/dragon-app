import client from "..";

const urlBase = "dragon/";

export const getDragons = () => client.api.get(`${urlBase}`);

export const deleteDragon = (id) => client.api.delete(`${urlBase}/${id}`);

export const createDragon = ({ name, type, createdAt }) =>
  client.api.post(`${urlBase}`, {
    name,
    type,
    createdAt,
  });

export const getDetailsDragon = (id) => client.api.get(`${urlBase}/${id}`);

export const editDragon = (id, { name, type, createdAt }) =>
  client.api.put(`${urlBase}/${id}`, { name, type, createdAt });
