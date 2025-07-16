import React from 'react'
import './cart.css'
import empty from '../../assets/empty.jpg'
import { useSelector } from 'react-redux'
import Cartcard from '../../components/cartcard/Cartcard';
const Cart = () => {
      const cart  = useSelector((state)=>state.cartslice.cart);
 if(cart.length==0)
 {
    return (
      <div className="emptycart">
        <div className='empty-img'>
          <img src={empty} alt="" />
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