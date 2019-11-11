import React from "react";
import { Link } from "react-router-dom";

function MembersNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Billionaire
            </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className={window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"}>
              Dashboard
             </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-bill" className="nav-link">
              Add Bill
             </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">
              History
             </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-link">
              Log Out
             </Link>
          </li>
        </ul>

      </div>

    </nav >
  );
}

export default MembersNav;