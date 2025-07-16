import React from 'react'
import './Cartcard.css'
import { MdDelete } from "react-icons/md";

import { useDispatch } from 'react-redux'
import { IncreaseQuantity,DecreaseQuantity, DeleteItem } from '../../slices/cartslice'
  import { toast } from 'react-toastify';

const Cartcard = ({item}) => {

   const dispatch = useDispatch();
const removenotify = () => toast("Product Removed From Cart!");
  return (
    <div className='cartcard'>
     <div className="left">
      <div className="cartimage">
       <img src={item.image} alt="" />
      </div>
      <div className="cartdetails">
        <p>{item.name}</p>
        <span>price : {item.price
            } Rs.</span>
      </div>
     </div>
      
     <div className="right">

        <div className='remove'> 
       <MdDelete onClick={()=>{
        dispatch(DeleteItem(item));
        removenotify();
       }} />
        </div>
        <div className='updatedbutton'>
                <button className='plus' onClick={()=>dispatch(IncreaseQuantity(item))}>+</button>
                <span>{item.quantity}</span>
              <button className='minus' onClick={()=>{dispatch(DecreaseQuantity(item))
        
                if(item.quantity==1)
                {
                  removenotify();
                }
              }}>-</button>
              </div>
     </div>
    </div>
  )
}

export default Cartcard