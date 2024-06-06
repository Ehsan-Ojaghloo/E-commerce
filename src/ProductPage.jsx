import React , {useState , useEffect} from 'react'
import "./ProductPage.scss"
import Navbar from './components/Navbar'
import Search from './components/Search'
// import Product from './components/Product'
import { BsCart3 } from "react-icons/bs"
import { AiOutlineProduct } from "react-icons/ai"

function ProductPage() {


  // const[weather , setWeather] = useState([]);

  fetch('https://api.openweathermap.org/data/2.5/weather?appid=582560638c1b004bd0c8a5cd5e2f7efa&q=alborz')
        .then(res=>res.json())
        .then(json=>console.log(json))

  // useEffect(()=>{
  //   fetch('https://api.openweathermap.org/data/2.5/weather?appid=582560638c1b004bd0c8a5cd5e2f7efa&q=tehran')
  //       .then(res=>res.json())
  //       .then(json=>console.log(json))
  // }, [weather])


    // const [product, setProduct] = useState([]);

    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products?limit=4&sort=desc') // using "sort" and "limit"
    //         .then(res=>res.json())
    //         .then(json=>setProduct(json))
    // }, [product])


  return (
    <div className='ProductPage-con'>
        <Navbar/>
        <div className='ProductPage-search-bar'>
            <Search />
            <AiOutlineProduct/>
            <BsCart3/>
        </div>
          <div className='all-site-products'>
              {product.map((productData)=>(
                  <div className='all-product'>
                    <img src={productData.image} alt="" />
                    <div className='all-product-info'>
                        <h1>{productData.title}</h1>
                        <h2>{productData.price}$</h2>
                    </div>
                  </div>

                  // <Product 
                  // imgSrc={productData.image} 
                  // productName={productData.title} 
                  // productPrice={productData.price} 
                  // />
              ))}
        </div>
    </div>
  )
}

export default ProductPage