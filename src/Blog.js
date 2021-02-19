import React from "react";
import Card from "@material-ui/core/Card";
import "./blog.css";

function Blog() {
  return (
    <div className="mainProduct">
      <Card className="blogCard" variant="outlined">
        <div className="productImage">
          <img
            src="https://c0.wallpaperflare.com/preview/930/638/455/business-office-computer-flatlay.jpg"
            height="555"
          />
        </div>
      </Card>
      <Card className="blogCard" variant="outlined">
        <div className="productImage">
          <img
            src="https://www.bizincloud.it/wp-content/uploads/2018/11/saas-on-premise.jpg"
            height="555"
          />
        </div>
      </Card>
    </div>
  );
}
export default Blog;
