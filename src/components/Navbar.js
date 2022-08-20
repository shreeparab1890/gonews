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
      document.getElementById("footer").style.backgroundColor = "black";
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
      document.getElementById("footer").style.backgroundColor = "#102039";

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
          className={`navbar navbar-expand-lg `}
          style={
            this.state.mode !== "light"
              ? { backgroundColor: "black" }
              : { backgroundColor: "#102039" }
          }
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{ color: "white" }}>
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
                  <Link className="nav-link " aria-current="page" to="/">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      Home
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Business{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Entertainment
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/environment">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Environment
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Health{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      Politics
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      Science{" "}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Sports
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      Technology
                    </span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/world">
                    <span
                      style={{
                        color: "white",
                        fontWeight: "400",
                        fontSize: "18px",
                      }}
                    >
                      World{" "}
                    </span>
                  </Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-light`}>
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
