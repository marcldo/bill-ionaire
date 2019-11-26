import React from "react";
import { Link, withRouter } from "react-router-dom";

function MembersNav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Billionaire
            </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className={props.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/members/dashboard" className={props.location.pathname === "/members/dashboard" ? "nav-link active" : "nav-link"}>
              Dashboard
             </Link>
          </li>
          <li className="nav-item">
            <Link to="/members/add-bill" className={props.location.pathname === "/members/add-bill" ? "nav-link active" : "nav-link"}>
              Add Bill
             </Link>
          </li>
          <li className="nav-item">
            <Link to="/members/history" className={props.location.pathname === "/members/history" ? "nav-link active" : "nav-link"}>
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

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">

          <span className="navbar-text">
            {props.user}
          </span>

        </ul>


      </div>


    </nav >
  );
}

export default withRouter(MembersNav);