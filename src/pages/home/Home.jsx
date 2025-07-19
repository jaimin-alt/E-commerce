import React, { useState } from 'react'
import './Home.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger }from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import category from '../../dummydata/category'
import bg from '../../assets/bg0.gif'
import Product from '../../components/product/Product'

gsap.registerPlugin(ScrollTrigger)
const Home = () => {
 
  const ref = useRef();
 const [cat,setcat] = useState("All")
  
 useGSAP(()=>{
      gsap.from(".hero-bg",{
        x:-100,
        duration:1,
        opacity:0,
        delay:0.4,
        
      }
      )
 })

useGSAP(()=>{
      gsap.from(".category-section",{
        x:100,
        duration:1,
        opacity:0,
        delay:0.4
      }
      )
 })


 useGSAP(()=>{
  gsap.from(ref.current,{
    opacity:0,
    duration:1,
    y:100,
    scrollTrigger:{
      trigger:ref.current,
      start:"top 70%",
      toggleActions:"play none none reverse",
      markers:false

    }
  })
 })

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
           

      <div className="trending-wrapper" ref={ref}>
      
      <p>
        Trending Products
      </p>
            
        <Product  cat={cat}/>
    
      </div>
      
      

         </div>

    </div>
  )
}

export default Home