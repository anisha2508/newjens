import React from "react";
import "./body.css";
import { Button } from "@material-ui/core";
import Demo from "./PopupForm";
import ValidatedLoginForm from "./ValidatedFormLogin";
import Slideshow from "./Slideshow";
const collection = [
  {
    src:
      "https://www.euroimmun.com/fileadmin/user_upload/euroimmun_corp_slide_diagnostic_laboratory-1.jpg"
  },
  {
    src:
      "https://www.bio-rad.com/webroot/web/images/hmp/COVID_HPB_4711_LGao.jpg"
  },
  {
    src:
      "https://content3.jdmagicbox.com/comp/def_content/Pathology_Labs/default-pathology-labs-242.jpg?clr=5727f"
  },
  {
    src: "https://www.bio.org/sites/default/files/2021-01/we-are-bio.png"
  }
];

function Body() {
  return (
    <div className="body">
      <div className="bodyContent">
        <h1 className="bodyContentIntro">Jennerus Bio Corp, a new world.</h1>
        <h3 className="bodyContentSub">
          A commitment to community for better technology & better care.
        </h3>
        <br />
        <Demo />
      </div>
      {/* <CarouselPage /> */}
      <div className="slideshowStyles">
        <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`3000`}
        />
      </div>
    </div>
  );
}

export default Body;
