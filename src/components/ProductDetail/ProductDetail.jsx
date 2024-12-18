import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../db/db';
import './ProductDetail.css'

const ProductDetail = () => {
    const {id} = useParams();
    const [data,setData] = useState({});

    useEffect(() =>{
        products.forEach(product => {
            if(product.id === Number(id)){
                setData(product);
            }
        })
    },[])


    useEffect(() => {
        window.scrollTo({
            top:'',
            behavior:'smooth'
        })
    },[id])

  return (
    <div className='details'>
      <div className="container">
        <div className="image">
            <img src={data.image} alt="" />
        </div>
        <div className="content">
        <h1>{data.name}</h1>
        <p>{data.miniDescription}</p>
        <p>{data.details}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
