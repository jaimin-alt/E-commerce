import React from 'react'
import './productcard.css'
import { useDispatch, useSelector } from 'react-redux'
  import { ToastContainer, toast } from 'react-toastify';
import { Additem, DecreaseQuantity, IncreaseQuantity } from '../../slices/cartslice';
const Productcard = ({item}) => {
const dispatch = useDispatch();
const cart = useSelector((state)=>state.cartslice.cart);
console.log(cart.length)
const cartitem = cart.find((x)=>x.id==item.id);
const quantity = cartitem?.quantity || 0;   
 const addnotify = () => toast("Product Added To Cart!");
  const removenotify = () => toast("Product Removed From Cart!");
  return (
    <div className='card'>
    <div className='img'>
  <img src={item?.image} alt="" />
    </div>

    <div className="details">
        <p className='name'>
   {item?.name}
    </p>
    
    <p className='price'>
       price : {item?.price}
    </p>
     
     {
     quantity>0?
    
      <div className='updatedbutton'>
        <button className='plus' onClick={()=>dispatch(IncreaseQuantity(item))}>+</button>
        <span>{quantity}</span>
      <button className='minus' onClick={()=>{dispatch(DecreaseQuantity(item))

        if(quantity==1)
        {
          removenotify();
        }
      }}>-</button>
      </div>
        
      
     
     :
        
          <button className='add' onClick={()=>
          {dispatch(Additem(item));
        addnotify();
         }
         }>ADD+</button>
         
        
       
     }
    </div>

    </div>
  )
}

export default Productcard