import React from 'react';
import "./About.css"

import Line from "../../assest/Frame (2).png";

import Cracker from "../../assest/Frame (3).png";

function About() {
  return (
    <section className="about">
      <div>
      <img className='about-line' src={Line} alt="logo"/>
      <h1 className="about">About</h1>
      <img className='about-line' src={Line} alt="logo"/>
      </div>
      <div className='about-content'>
        <img src={Cracker} alt="shorts"/>
        <p>Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
        The choice is yours. Because they don’t have one.</p>
        <img src={Cracker} alt="shorts"/>
      </div>
      
    </section>
  );
}

export default About;
