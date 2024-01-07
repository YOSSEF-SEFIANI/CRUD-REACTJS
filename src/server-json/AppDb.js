import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:9999",
});

export const ListClients = () => {
  return clientApi.get("/clients");
};

export const GetEmail = (email, user) => {
  return clientApi.get(`/clients/?email=${email}`);
};
export const clientsById = (id) => {
  return clientApi.get(`/clients/${id}`);
};
export const AddClients = (clients) => {
  return clientApi.post("/clients", clients);
};
export const RemoveClient = (client) => {
  return clientApi.delete(`/clients/${client.id}`);
};
export const editClients = (client) => {
  return clientApi.put(`/clients/${client.id}`, client);
};
