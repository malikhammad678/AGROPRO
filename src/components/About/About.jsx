import React from 'react'
import './About.css'
import about1 from '../../assets/about_1.jpg'
import about2 from '../../assets/about2.jpg'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="left">
        <h3>About Us</h3>
        <h1>AGRICULTURE MARKET</h1>
        <p>Welcome to AGROPRO, where innovation meets tradition in agriculture. With a deep-rooted commitment to sustainable farming practices, we specialize in delivering top-notch agricultural services tailored to meet the diverse needs of farmers and agribusinesses.

          Our expertise spans across crop management, soil health analysis, irrigation solutions, and modern farming technologies. By combining advanced tools with years of experience, we help our clients maximize yields, enhance productivity, and ensure long-term environmental sustainability.

          Whether you're a small-scale farmer or a large agricultural enterprise, our mission is to help you thrive by fostering growth, resilience, and sustainability in every field. Together, let’s cultivate success.!</p>
        <button>Explore More</button>
      </div>
      <div className="right">
        <img src={about1} alt="" />
      </div>
    </div>
  )
}

export default About
