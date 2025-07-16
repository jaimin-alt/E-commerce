import React from 'react'
import { dummydata } from '../../dummydata/Dummydata'

import './product.css'
import Productcard from '../product-card/Productcard'
const Product = ({cat}) => {

   if(cat=="All")
   {
return(
    <div className='products'>
        
         
         
          {
         dummydata.slice(0,10).map((item)=>(
         <Productcard key={item.id} item={item} />
         
         ))
          }
    </div>
   )
   
   }
   
   else if(cat=="Allinone")
   {
      return(
    <div className='products'>
        
         
         
          {
         dummydata.map((item)=>(
         <Productcard key={item.id} item={item}/>
         
         ))
          }
    </div>
   )

   }

  return (
    <div className='products'>
        
         
         
          {
         dummydata.filter((item)=>item?.category==cat).map((item)=>(
         <Productcard key={item.id} item={item} />
         
         ))
          }
    </div>
  )
}

export default Product