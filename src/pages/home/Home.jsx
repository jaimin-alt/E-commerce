import React, { useState } from 'react'
import './Home.css'
import category from '../../dummydata/category'
import bg from '../../assets/bg0.gif'
import Product from '../../components/product/Product'
const Home = () => {

 const [cat,setcat] = useState("All")

  return (
    <div className='home'>
         
         <div className='home-inner'>

            <div className='hero-bg'>
                <img src={bg} alt="" />
              
            </div>
       
      <div className="category-wrapper">
        <div>
          <p>
            Categories
          </p>
        </div>
         <div className='category-section'>
      
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
           

      <div className="trending-wrapper">
      
      <p>
        Trending Products
      </p>
            
        <Product cat={cat}/>
    
      </div>
      
      

         </div>

    </div>
  )
}

export default Home