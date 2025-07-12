import React from 'react'
import './Home.css'
import bg from '../../assets/bg0.gif'
const Home = () => {
  return (
    <div className='home'>
         
         <div className='home-inner'>

            <div className='hero-bg'>
                <img src={bg} alt="" />
            </div>
         </div>
    </div>
  )
}

export default Home