import React, { Component } from "react";
import { Link } from "react-router-dom";
//import PropTypes from "prop-types";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  // mode = "light";

  toggleMode = () => {
    console.log("in toggle");
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "grey";
      document.getElementById("prev").style.backgroundColor = "white";
      document.getElementById("prev").style.color = "black";
      document.getElementById("next").style.backgroundColor = "white";
      document.getElementById("next").style.color = "black";

      console.log(this.state.mode);
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.getElementById("prev").style.backgroundColor = "black";
      document.getElementById("prev").style.color = "white";
      document.getElementById("next").style.backgroundColor = "black";
      document.getElementById("next").style.color = "white";

      console.log(this.state.mode);
    }
  };
  render() {
    //let { mode, toggleMode } = this.props;
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsOnGo
            </Link>
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
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ marginLeft: "50px" }}
              >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
                  </Link>
                </li>
              </ul>
              <div
                className={`form-check form-switch text-${
                  this.state.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="enableModeSwitch"
                  onClick={this.toggleMode}
                />
                <label className="form-check-label" htmlFor="enableModeSwitch">
                  {this.state.mode === "dark"
                    ? "Disable Dark Mode"
                    : "Enable Dark Mode"}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
