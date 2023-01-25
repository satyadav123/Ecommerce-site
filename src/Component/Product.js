import React, { useState,useEffect } from 'react';
import './style/product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Product() {

    const [set,update]=useState([]);
    useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(({data})=>{
        console.log(data)
update(data)
    });
    
    }, [])
    
  return (
    <>
<h1>product</h1>
<div className='container'>
{
    set.map((e)=>(
      
      
        <div className='box'>
              <Link to={`/about/${e.id}`}>
         <img src={e?.image} alt=""/></Link>
         <h4>{e?.title}</h4>
         <h5>Price: {e?.price}</h5>
         <button>Add to cart</button>
         </div>
       
       
     ))
}
</div>
    </>
  )
}
