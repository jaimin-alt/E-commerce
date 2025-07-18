import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact">
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