import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import Product from "./components/Product";
import "./pages/App.scss";
import Product2 from "./components/Product2";

function App() {
  return (
    <div className="app-con">
      <Navbar/>
      <div className="upper-part-con">
        <Search />
        <Link to="/link"> <AiOutlineProduct/> </Link>
        <BsCart3/>
      </div>
      <div className="products">
        <h1> Explore </h1>
        <div className="product-section">
          <Product imgSrc={"/t-shirt.jpg"} productName={"Black T-shirt"} productPrice={"210.00"} />
          <Product imgSrc={"/shoes.jpg"} productName={"Sneakers"} productPrice={"130.00"}/>
        </div>
      </div>
      <div className="selling-section">
        <h1> Best Selling </h1>
        <Product2/>
      </div>
    </div>
  );
}

export default App;
