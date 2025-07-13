import React from 'react'
import './productcard.css'
const Productcard = ({name,image,category,price}) => {
  return (
    <div className='card'>
    <div className='img'>
  <img src={image} alt="" />
    </div>

    <div className="details">
        <p>
   name : {name}
    </p>
    
    <p>
       price:{price}
    </p>
     
     <button>ADD+</button>
    </div>

    </div>
  )
}

export default Productcard