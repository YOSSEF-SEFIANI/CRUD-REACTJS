import React, { useReducer, useState } from "react";
import { AddClients } from "../server-json/AppDb";
import { useNavigate } from "react-router-dom";
import { initialized } from "./model";
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};
export default function NewClients() {
  
  const [state, dispatch] = useReducer(reducer, initialized);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewClient = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      date: state.date,
    };

    AddClients(NewClient)
      .then((resp) => {
        alert(JSON.stringify(resp.data));
        navigate("/clients");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    dispatch({
      type: "add",
      field: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <>
      <form className="container " onSubmit={handleSubmit}>
        <legend className="text-center font-monospace  p-3">New Client</legend>
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
    </>
  );
}
