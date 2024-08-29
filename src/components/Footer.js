import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../style/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebookSquare/>
            <FaLinkedin/>
            </div>
        <p>&copy; 2024 Pizza Hut.com</p>
    </div>
  )
}

export default Footer