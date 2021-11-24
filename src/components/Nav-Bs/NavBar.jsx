import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            NavBar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/#">
                INICIO
              </a>
              <a className="nav-link" href="/#">
                Microprocesadores
              </a>
              <a className="nav-link" href="/#">
                Placas de video
              </a>
              <a className="nav-link" href="/#">
                Memorias Ram
              </a>
              <a className="nav-link" href="/#">
                Mothers
              </a>
              <div className=" position-absolute end-0">
                <CartWidget/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
