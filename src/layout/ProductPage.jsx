import React , { useState , useEffect } from 'react'

function ProductPage() {
  
  const [product , setProduct] = useState([]);
  const [secondItem , setSecondItem] = useState([{}]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduct(json))
  }, [product])


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/10')
        .then(res=>res.json())
        .then(json=>setSecondItem(json))
  }, [secondItem]) // [secondItem] is dependencie



  return (
    <div>
      {product.map((productData)=>(
        <div key={productData.id}>
          <h1>{productData.title}</h1>
          <h2>{productData.price}</h2>
          <img src={productData.image} alt=''/>
        </div>
      ))}

      <img src={secondItem.image} alt=''/>
    </div>
  )
}

export default ProductPage