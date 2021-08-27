
import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const mystyle = {
    backgroundColor: "#e3f2fd",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={mystyle}>
        <a className="navbar-brand" href="/">
          ARV-DigiTech
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/faq">
                FAQs
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form> */}
        </div>
      </nav>
    </div>
  );
}