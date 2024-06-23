import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "./FollowUS.css"

import YellowLine from "../../assest/Frame 64.png"
import Design from "../../assest/Frame 62.png"

function FollowUs() {
  return (
    <>
    <img className='yellow-line' src={YellowLine} alt="line" />
      <section className="follow-us-container">
      <img src={Design} alt="design"/>
      <div className='follow-us'>
        <h4>FOLLOW US</h4>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      </div>
      <img src={Design} alt="design"/>
    </section>
    <img className='yellow-line' src={YellowLine} alt="line" />
    </>
  );
}

export default FollowUs;
