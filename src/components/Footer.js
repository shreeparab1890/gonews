import React from "react";
import { MDBIcon, MDBFooter } from "mdb-react-ui-kit";

function Footer() {
  return (
    <>
      <MDBFooter bgColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          //style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          style={{ backgroundColor: "#102039", color: "white" }}
          id="footer"
        >
          Made with <MDBIcon fas icon="a-solid fa-heart" /> in Goa || &copy;{" "}
          {new Date().getFullYear()} Copyright: NewsOnGo
        </div>
      </MDBFooter>
    </>
  );
}

export default Footer;
