import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand" to={"home"}>
            CRUD
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"clients"}>
                  List Client
                </Link>
              </li>
            </ul>
            <li className="nav-item ms-auto">
              <Link className="btn btn-outline-danger" to={"/login"}>
                <FontAwesomeIcon icon={faSignIn} />
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
