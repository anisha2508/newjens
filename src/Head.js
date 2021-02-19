import React from "react";
import "./head.css";
import { Button } from "@material-ui/core";

function Head() {
  return (
    <div className="headerMain">
      <div className="headerLogo">
        <h1> JENNERUS </h1>
      </div>
      <div className="headerMenu">
        <h2 className="headerHome">
          <a href="" className="option1">
            {" "}
            Home
          </a>{" "}
        </h2>
        <h2 className="headerPort">
          <a href="" className="option2">
            {" "}
            Products{" "}
          </a>{" "}
        </h2>
        <h2 className="headerPages">
          <a href="" className="option3">
            {" "}
            Services{" "}
          </a>{" "}
        </h2>
        <h2 className="headerBlog">
          <a href="" className="option4">
            {" "}
            Contact Us{" "}
          </a>{" "}
        </h2>
      </div>
      <div className="headerRight">
        <Button variant="outlined" className="headerLogin">
          LOGIN
        </Button>
        <Button variant="contained" className="headerSignup">
          SIGNUP
        </Button>
      </div>
    </div>
  );
}

export default Head;
