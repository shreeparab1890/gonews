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
      document.getElementById("news_comp_title").style.color = "white";
      var elms = document.querySelectorAll("[id=read_more_btn]");
      for (var i = 0; i < elms.length; i++)
        elms[i].style.backgroundColor = "black";

      console.log(this.state.mode);
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.getElementById("prev").style.backgroundColor = "black";
      document.getElementById("prev").style.color = "white";
      document.getElementById("next").style.backgroundColor = "black";
      document.getElementById("next").style.color = "white";
      document.getElementById("news_comp_title").style.color = "Black";

      var elms1 = document.querySelectorAll("[id=read_more_btn]");
      for (var x = 0; x < elms1.length; x++)
        elms1[x].style.backgroundColor = "#1266f1";

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
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/environment">
                    Environment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/world">
                    World
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
