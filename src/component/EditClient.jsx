import React, { useEffect, useReducer, useState } from "react";
import { AddClients, clientsById, editClients } from "../server-json/AppDb";
import { AlertMessage } from "./AlertMessage";
import { useNavigate, useParams } from "react-router-dom";
import { initialized } from "./model";

const reducer = (state, action) => {
  switch (action.type) {
    case "Edit":
      return { ...state, [action.field]: action.value };
    case "find": {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        date: action.payload.date,
      };
    }
    default:
      return state;
  }
};
export default function EditClient() {

  const { id } = useParams();
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, initialized);
  const [showAlert, setShow] = useState(false);
  const [showMsg, setMsg] = useState("");

  useEffect(() => {
    FindById(id);
  }, []);

  const FindById = (id) => {
    clientsById(id).then((resp) => {
      dispatch({
        type: "find",
        payload: resp.data,
      });
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const NewClient = {
      id: id,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      date: state.date,
    };

    editClients(NewClient)
      .then((resp) => {
        alert(JSON.stringify(resp.data));
        navigate("/clients")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    dispatch({
      type: "Edit",
      field: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <div className="row">
      <form className="container col-md-6" onSubmit={handleSubmit}>
        <legend className="text-center font-monospace  p-3">Edit Client</legend>
        <div className="form-group border border-2 rounded ms-2 p-2">
          <label className="form-label mt-4">First name :</label>
          <input
            type="text"
            value={state.firstName}
            onChange={handleChange}
            name="firstName"
            className="form-control"
            placeholder="First Name"
          />
          <label className="form-label mt-4">Last name :</label>
          <input
            type="text"
            onChange={handleChange}
            value={state.lastName}
            className="form-control"
            name="lastName"
            placeholder="Last Name"
          />
          <label className="form-label mt-4">Email :</label>
          <input
            type="email"
            onChange={handleChange}
            value={state.email}
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
          <label className="form-label mt-4">Date of birth :</label>
          <input
            type="date"
            className="form-control"
            name="date"
            id="InputDate"
            onChange={handleChange}
            value={state.date}
          />
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
