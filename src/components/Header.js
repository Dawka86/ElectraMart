import React from "react";
import { Link } from "react-router-dom";
import Sign from "./Sign";

export default function Header() {
  return (
    <div className="container-fluid common_container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <span className="fs-4 tittle_font">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                class="bi bi-explicit"
                viewBox="0 0 12 24"
              >
                <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z" />
                <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z" />
              </svg>
              <span className="tittle_font">LectraMart</span>
            </span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 ">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>

        <div class="col-md-3 text-end">
          <button type="button" className="btn btn-outline me-2">
            Login
          </button>
          <Link to="/Sign" className="btn btn-dark">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}
