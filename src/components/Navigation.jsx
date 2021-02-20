import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const curPath = this.props.location.pathname;
    return (
      <header className="page-header">
        <nav className="navbar-container">
          <div className="brand-name">
            <Link
              to="/"
              className={`brand-name-home ${curPath === "/" && "active"}`}
            >
              <p>MB</p>
              MURUGA BHAVAN
            </Link>
          </div>
          <ul className="navbar-items">
            <Link
              to="/menu"
              className={`navbar-item ${curPath === "/menu" && "active"}`}
            >
              <li>MENU</li>
            </Link>
            <Link
              to="/location"
              className={`navbar-item ${curPath === "/locations" && "active"}`}
            >
              <li>LOCATIONS</li>
            </Link>
            <Link
              to="/about"
              className={`navbar-item ${curPath === "/about" && "active"}`}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              to="/contact"
              className={`navbar-item ${curPath === "/contact" && "active"}`}
            >
              <li>CONTACT</li>
            </Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Navigation);
