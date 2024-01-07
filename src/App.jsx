import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import ListClients from "./component/ListClients";
import NewClient from "./component/Login";
import Home from "./component/Home";
import "./App";
import EditClient from "./component/EditClient";
import Login from "./component/Login";
import { AuthContext } from "./auth-service/AuthContext";
import useAuthState from "./auth-service/useAuthState";

export default function App() {
  const authState = useAuthState();

  return (
    <AuthContext.Provider value={authState}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/clients" element={<ListClients />} />
          <Route path="/clients/editClient/:id" element={<EditClient />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
