import { Button } from "@material-ui/core";
import React from "react";
import "./banner.css";

function Banner() {
  return (
    <div className="banner">
      <br />
      <br />
      <br />
      <br />
      <h1 className="bannerText">We Become Jennerusian </h1>
      <h3 className="bannerSubText">Just a new bio corp world.</h3>
      <br />
      <Button variant="contained" className="buttonOne" size="large">
        Signup
      </Button>
      <Button variant="outlined" className="buttonTwo" size="large">
        Login
      </Button>
    </div>
  );
}

export default Banner;
