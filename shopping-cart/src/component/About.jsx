import React from 'react'

function About() {
  return (
    <div className="about-section">
    <h2>About Us</h2>
    <p>
      Welcome to Ekart shopping centre! We strive to provide you with the best shopping experience possible.
    </p>
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>Email: Ekarte.ecommerce.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Main Street, Kenya</p>
    </div>
    <div className="social-media">
      <h3>Follow Us</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
    <div className="legal-info">
      <h3>Legal Information</h3>
      <p>Copyright © 2024 E-commerce Site. All rights reserved.</p>
      <p>Terms of Service | Privacy Policy</p>
    </div>
  </div>
  )
}

export default About