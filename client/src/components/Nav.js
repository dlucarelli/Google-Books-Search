import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="./">Books Search N' Save</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link
            to="/"
            className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Searched
          </Link>
          <Link
            to="/saved"
            className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
            Saved
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;