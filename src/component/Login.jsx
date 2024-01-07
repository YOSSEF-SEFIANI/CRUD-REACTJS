import React, { useContext, useState } from "react";
import { GetEmail } from "../server-json/AppDb";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  // const [authState, setAuthState] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    GetEmail(email).then((resp) => {
      // return setAuthState({
      //   ...authState,
      //   isAuthenticated: true,
      //   lastName: resp.data,
      //   roles: "",
      // });
      console.log(resp.data.lastName);
    });
  };
  return (
    <div className="container ms-5 mt-5  row ">
      <form
        className="form-group border border-info p-3 rounded col-6"
        onSubmit={handleSubmit}
      >
        <h2 className=" text-center font-monospace ">Login :</h2>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="floatingInput"
            placeholder="your email"
          />
          <label htmlFor="floatingInput">Gmail</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckChecked"
            name="checked"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Checked
          </label>
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
    </div>
  );
}
