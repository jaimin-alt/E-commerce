import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { IncreaseQuantity,Additem,DecreaseQuantity } from '../../slices/cartslice';
import './searchcard.css'
const Searchcard = ({item}) => {
  const dispatch = useDispatch();
const cart = useSelector((state)=>state.cartslice.cart);
const cartitem = cart.find((x)=>x.id==item.id);
const quantity = cartitem?.quantity || 0;   

  return (
    <div className='searchcard'>
       <div className='img-container'>
         <img src={item.image} alt="" />
       </div>
        <span>{item.name}</span>
        <span>price : {item.price}</span>
      {
          quantity>0?
         
           <div className='updatedbutton'>
             <button className='plus' onClick={()=>dispatch(IncreaseQuantity(item))}>+</button>
             <span>{quantity}</span>
           <button className='minus' onClick={()=>dispatch(DecreaseQuantity(item))}>-</button>
           </div>
             
           
          
          :
              <button className='add' onClick={()=>dispatch(Additem(item))
              }>ADD+</button>
          }
    </div>
  )
}

export default Searchcard