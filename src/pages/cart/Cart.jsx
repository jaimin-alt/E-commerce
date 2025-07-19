import React, { useRef } from 'react'
import './cart.css'
import gsap from 'gsap'
import empty from '../../assets/empty.jpg'
import { useSelector } from 'react-redux'
import Cartcard from '../../components/cartcard/Cartcard';
import { useGSAP } from '@gsap/react';
const Cart = () => {
    

  const cartref = useRef()

  useGSAP(()=>{
    gsap.from(cartref.current,{
         scale:0.95,
         duration:0.6,
         repeat:-1,
         ease:"power1.out",
         yoyo:true
    })
  })
      const cart  = useSelector((state)=>state.cartslice.cart);
 if(cart.length==0)
 {
    return (
      <div className="emptycart" >
        <div className='empty-img'>
          <img src={empty} alt="" ref={cartref}/>
        </div>
           <h1>
            Empty Cart !
           </h1>
      </div>
    )
 }
 
  return (
    <div className='cart-container'>
        
     {
      cart.map((item)=>{
        return (
          <Cartcard key={item.id} item={item}/>
        )
      })
     }
    </div>
  )
}

export default Cart