import React from 'react'
import './Contact.css'
import contact_img from '../../assets/contact_img.jpg'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h3>Contact Us</h3>
      <h1>LET'S TALK</h1>
      <div className="contact_container">
        <div className="image">
       <img src={contact_img} alt="" />
        </div>
        <div className="contact_content">
         <form action="#">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea type="text" placeholder='Message' />
         </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
