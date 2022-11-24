import React from 'react'
import { Link } from 'react-router-dom';
import './Success.css';

function Success() {
  return (
    <div className='success'>
<h1>You have successfully signed Up to Kabarak News! Enjoy!</h1>

<Link to="/login">Back To Login</Link>
    </div>
  )
}

export default Success