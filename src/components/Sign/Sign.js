import React, { useState } from "react";

export default function Sign() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  function updateEmail(event) {
    const emailAdded = event.target.value;
    setEmail(emailAdded);
  }

  function updateName(event) {
    const firstName = event.target.value;
    setName(firstName);
  }

  function updatePassword(event) {
    const addPassword = event.target.value;
    setPassword(addPassword);
  }

  function updateConfirmPassword(event) {
    const confirm = event.target.value;
    setConfirmPassword(confirm);
  }

 

  return (
    <div className="container center-content mt-3 mb-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 sign_up_wrapper">
          <form action="/sign" method="POST">
            <h1 className="h4 mb-3">Please sign up {name}</h1>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="name"
                name="name"
                value={name}
                onChange={updateName}
              />
              <label htmlFor="nameInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="emailInput"
                placeholder="name@example.com"
                onChange={updateEmail}
                value={email}
              />
              <label htmlFor="emailInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                id="passwordInput"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
              <label htmlFor="passwordInput">Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmPasswordInput"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={updateConfirmPassword}
              />
              <label htmlFor="confirmPasswordInput">Confirm Password</label>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">
              Sign up
            </button>
            <hr />
            <p className="sign_terms">
              By clicking Sign up, you agree to the terms of use.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
