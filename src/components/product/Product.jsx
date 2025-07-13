import React from 'react'
import { dummydata } from '../../dummydata/Dummydata'

import './product.css'
import Productcard from '../product-card/Productcard'
const Product = () => {
  return (
    <div className='products'>
          {
         dummydata.map((item)=>(
         <Productcard key={item.id} image={item.image} name={item.name} price={item.price} category={item.category} />
         
         ))
          }
    </div>
  )
}

export default Product