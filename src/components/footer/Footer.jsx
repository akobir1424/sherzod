//images
import img17 from "../images/img17.svg";

import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-text">
          <h3 className="h3">
            Join 100 Compannies who <br /> boost their business with <br />{" "}
            Product
          </h3>

          <br />
          <button>Get This</button>
        </div>
        <div className="footer-img">
          <img src={img17} alt="" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
