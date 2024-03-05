import React, { Component } from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    let { darkMode, mode } = this.props;
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              CurrentBuzz
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            onClick={darkMode}
            className={`btn btn-${mode === "light" ? "dark" : "light"} me-2`}
          >
            {mode === "light" ? "dark" : "light"}
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
