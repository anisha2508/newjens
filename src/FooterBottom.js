import React from "react";
import "./footerbottom.css";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function FooterBottom() {
  return (
    <div className="footer">
      <div className="footerCards">
        <div className="card1">
          <br />
          <h1>JENNERUS</h1>
          <p className="aboutText">
            We shape the world, a new bio corp world, etc
          </p>
          <br />
          <div className="footericons">
            <MailIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <FacebookIcon fontSize="large" />
          </div>
        </div>
        <div className="card2">
          <p>SERVICES</p>
          <br />
          <br />
          <span>Bio Corp</span>
          <br />
          <span>Technology</span>
          <br />
          <span>Medicine</span>
          <br />
          <span>FAQ</span>
          <br />
        </div>
        <div className="card3">
          <p>COMPANY</p>
          <br />
          <br />
          <span>About</span>
          <br />
          <span>Terms</span>
          <br />
          <span>Privacy Policy</span>
          <br />
          <span>Carrier</span>
          <br />
        </div>
        <div className="card4">
          <p>SERVICES</p>
          <br />
          <p className="fontDeco">
            W e A r e A l w a y s<br />
            <br /> H a p p y T o H e l p
          </p>
          <p>jennerus@gmail.com</p>
        </div>
      </div>
      <br />
      <hr className="hrTag" />
      <br />
      <p>Copyright © 2021 Jennerus</p>
      <p>All rights reserved</p>
    </div>
  );
}

export default FooterBottom;
