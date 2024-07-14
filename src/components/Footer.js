import React from "react";

export default function Footer() {
  function getFullYear() {
    const d = new Date();
    const year = d.getFullYear();
    return year;
  }

  return (
    <div class="container-fluid common_container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></a>
          <span class="mb-3 mb-md-0 text-body-secondary">
            © <span className="tittle_font_footer"> LectraMart </span>
            {getFullYear()}
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-body-secondary" href="#"></a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#"></a>
          </li>
          <li class="ms-3">
            <a class="text-body-secondary" href="#"></a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
