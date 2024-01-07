import React, { useEffect, useReducer, useState } from "react";
import { ListClients, RemoveClient } from "../server-json/AppDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { actions } from "../action";
import { Link, useNavigate } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case actions.Get_Products_action:
      return {
        ...state,
        Clients: action.payload,
      };

    case actions.Delete_Product_action:
      return {
        ...state,
        Clients: state.Clients.filter((clt) => clt.id !== action.payload.id),
      };
  }
}
export default function ListClient() {
  const [state, dispatch] = useReducer(reducer, { Clients: [] });
  const navigate = useNavigate();

  useEffect(() => {
    handleSave();
  }, []);

  const handleSave = () => {
    ListClients().then((resp) => {
      dispatch({ type: actions.Get_Products_action, payload: resp.data });
    });
  };
  const handleDeleteById = (clt) => {
    RemoveClient(clt).then((resp) => {
      dispatch({ type: actions.Delete_Product_action, payload: clt });
    });
  };
  return (
    <div >
      <legend className="text-center font-monospace p-3">List Clients</legend>
      <div className="container border border-success rounded p-3">
        <table className="table table-hover  ">
          <thead>
            <tr >
              <th scope="col">id</th>
              <th scope="col">firstName </th>
              <th scope="col">lastName </th>
              <th scope="col">Gmail</th>
              <th scope="col"> Date of birth</th>
            </tr>
          </thead>
          <tbody>
            {state.Clients.map((clt) => (
              <tr className="table-secondary" key={clt.id}>
                <th scope="row">{clt.id}</th>
                <td>{clt.firstName}</td>
                <td>{clt.lastName}</td>
                <td>{clt.email}</td>
                <td>{clt.date}</td>
                <td>
                  <button
                    onClick={() => handleDeleteById(clt)}
                    className="btn btn-outline-danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`editClient/${clt.id}`)}
                    className="btn btn-outline-success"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
