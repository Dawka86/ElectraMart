import React from "react";

export default function Sign() {
  return (
    <div class="container full-height center-content mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4">
          <form>
            <h1 class="h4 mb-3">Please sign in</h1>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary w-100 py-2" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
