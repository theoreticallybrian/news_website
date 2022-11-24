import React from 'react';
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className='contact'>

<div className="contact_container">
  <h1>Hey Send Us a Message!</h1>
<input className='contact_input' placeholder='name'/>
<input className='contact_input' placeholder='Email'/>
<textarea className='contact_textarea' placeholder='Your Message Here'/> 
<button className='contact_button'>Send</button>
</div>

    </div>
  )
}

export default ContactUs