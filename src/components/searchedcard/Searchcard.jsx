import React from 'react'
import './searchcard.css'
const Searchcard = ({image,name,price}) => {
  return (
    <div className='searchcard'>
       <div className='img-container'>
         <img src={image} alt="" />
       </div>
        <span>{name}</span>
        <span>price : {price}</span>
      <button className='add'>ADD+</button>
    </div>
  )
}

export default Searchcard