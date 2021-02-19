import React from "react";
import "./product.css";
import Card from "@material-ui/core/Card";
import LocalMallTwoToneIcon from "@material-ui/icons/LocalMallTwoTone";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import StoreIcon from "@material-ui/icons/Store";
function Product() {
  return (
    <div className="mainProduct">
      <a href="" className="option1">
        <Card className="productCard" variant="outlined">
          <br />
          <div className="productDetails">
            <StoreIcon style={{ fontSize: 50 }} />
            <h2 className="productTitle">Product 1</h2>
            <h3 className="productTitleDetail">
              Jennerus services help you connect your customers with the next
              wave of experience and insights.
            </h3>
          </div>
        </Card>
      </a>

      {/*  */}
      <a href="" className="option1">
        <Card className="productCard" variant="outlined">
          <br />
          <div className="productDetails">
            <StorefrontIcon style={{ fontSize: 50 }} />
            <h2 className="productTitle">Product 2</h2>
            <h3 className="productTitleDetail">
              Jennerus services help you connect your customers with the next
              wave of experience and insights.
            </h3>
          </div>
        </Card>
      </a>
      {/*  */}
      {/* <a href="" className="option1">
        <Card className="productCard" variant="outlined">
          <br />
          <div className="productDetails">
            <PhonelinkRingIcon style={{ fontSize: 50 }} />
            <h2 className="productTitle">Prodcut 3</h2>
            <h3 className="productTitleDetail">
              Jennerus services help you connect your customers with the next
              wave of experience and insights.
            </h3>
          </div>
        </Card>
      </a> */}
    </div>
  );
}
export default Product;
