import React , {useState , useEffect} from 'react'
import "./ProductPage.scss"
import Navbar from './components/Navbar'
import Search from './components/Search'
import { BsCart3 } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";

function ProductPage() {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }, [product])


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
              ))}
        </div>
    </div>
  )
}

export default ProductPage