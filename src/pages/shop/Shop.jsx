import React from 'react'
import category from '../../dummydata/category'
import './shop.css'
import { FaShopify } from "react-icons/fa";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import { useState } from 'react'
import Product from '../../components/product/Product'
const Shop = () => {
  

  useGSAP(()=>{
    gsap.from(shopref.current,{

    x:-500,
    duration:0.5,

    })
  })

 
  const shopref  = useRef();
   const [cat,setcat] = useState("All")

  return (
    <div className='shop-container'>

      <div  className='shop-heading' ref={shopref}>
        <h1>SHOP <FaShopify/></h1>
      </div>
            <div className="category-wrapper">
        <div>
          <p style={{fontSize:"1.5rem"}}>
            Categories
          </p>
        </div>
         <div className='category-section' style={{paddingBottom:"10px"}}>
      
        {
          category.map((item)=>(
            <div className="category-card" onClick={()=>setcat(item.name)} key={item.id}>
            <div className="cat-img">
               <img src={item.image} alt="" />
            </div>

            <span>{item.name}</span>

            </div>
  
          ))
        }
       </div>
      </div>

       <div className="trending-wrapper" style={{paddingTop:"10px"}}>
 {
  cat=="All"?
   <Product cat="Allinone"/>
  :        <Product cat={cat}/>

 }
      
    
      </div>
    </div>
  )
}

export default Shop