import React from 'react'
import "../components/Product.scss"
import { IoAddCircleSharp } from "react-icons/io5";

function Product({imgSrc , productName , productPrice}) {
  return (
    <div className="card-con">
      <img src={imgSrc} alt="" />
      <div className="product-info">
        <h3> {productName} </h3>
        <span> Description </span>
      </div>
      <div className="product-price">
        <span> {productPrice}$ </span>
        <IoAddCircleSharp/>
      </div>
    </div>
  )
}

export default Product