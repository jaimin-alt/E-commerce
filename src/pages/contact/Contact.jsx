import React from 'react'
import './contact.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
const Contact = () => {

  const reference  = useRef();

  useGSAP(()=>{
    gsap.from(reference.current,{
      y:3,
      repeat:-1,
      duration:1,
      yoyo:true
    })
  })
  return (
    <div className='contact-container'>
      <div className="contact" ref={reference}>
        <form action="https://formspree.io/f/xpwlwlpd" method="POST">
  
            <input type="text" placeholder='name' name='username'/>
            <input type="email" placeholder='email' name='email' />
            <textarea name="message" placeholder='message' cols="50" rows="100"></textarea>
    
            <button type='submit' className='submit'>submit</button>
         
      </form>
      </div>
    </div>
  )
}

export default Contact