import React from 'react'
import '../style/Contact.css'
import Pizzahut from '../assets1/RS.jpg'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${Pizzahut})`}}></div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>
        <form id='contect-f' method='post'>
          <label>Full Name</label>
          <input type='text' placeholder='Enter full name...'></input>
          <label>Email</label>
          <input type='email' placeholder='Enter email...'></input>
          <label>Message</label>
          <textarea rows="6" placeholder='Enter message...' required></textarea>
          <button type='submit'>Send Messege</button>
        </form>

      </div>
    </div>
  )
}
