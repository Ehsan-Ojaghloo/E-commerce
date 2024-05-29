import React from 'react'
import "../components/Product2.scss"
import { FaSquareCaretRight } from "react-icons/fa6";

function Product2() {
  return (
    <div className='best-selling-product'>
        <img src="/jeans.jpg" alt="jeans" />
        <div className="best-selling-product-info">
            <h3> Jeans </h3>
            <span> Description </span>
            <span className='price-tag'> 230.00$ </span>
        </div>
        <FaSquareCaretRight/>
    </div>
  )
}

export default Product2