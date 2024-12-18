import React, { useEffect, useState } from 'react'
import './Products.css'
import { products } from '../../db/db.js';
import { Link } from 'react-router-dom';
const Products = () => {
    const [product,setProducts] = useState([]);


    useEffect(() => {
      setProducts(products)
    },[])

  return (
    <div className='products' id='product'>
           <h3>Products</h3>
           <h1>EXPLORE OUR PRODUCTS</h1>
           <div className="box_container">
           {
           product.map((item,index) => {
            return(
                <Link to={`details/${item.id}`} key={item.id} className='box'>
                   <img src={item.image} alt="" />
                   <h2>{item.name}</h2>
                   <p style={{color:'#333'}}>{item.miniDescription}. <span style={{color:'rgba(10, 118, 0, 0.906)'}}>more...</span></p>
                </Link>
            )
           })
           }
           </div>
    </div>
  )
}

export default Products
