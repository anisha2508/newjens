import Banner from "./Banner";
import Blog from "./Blog";
import Body from "./Body";
import FooterBottom from "./FooterBottom";
import Head from "./Head";
import OurServices from "./OurServices";
import Product from "./Product";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="content">
        <title>Jennerus</title>
        <Head />
        <hr />
        <Body />
        <br />
        <br />
        <Product />

        <Blog />
        <Banner />
      </div>
      <FooterBottom />
    </div>
  );
}
