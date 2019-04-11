import React from 'react'
import "./home.css"

const linkStyle = {
  color: 'white'
}

const footerStyle = {
  display: 'inline-block',
  backgroundColor: 'black',
};

const Footer = () => (

  <div className="container-fluid border-top py-2 px-5"  style={footerStyle}>
    <div className="footer">
      <div className="float-left footer-left">
        <h2 style={linkStyle}>Liana Technologies</h2>
        <p style={linkStyle}>Sales and inquiries</p>
        <p style={linkStyle}>Email: sales@lianatech.com</p>
        <p style={linkStyle}>Phone: +358 10 387 7053 </p>
        <button type="button" className="btn btn-success">Contact us</button>
      </div>
      <div className="float-right footer-right">
        <ul>
          <li><a style={linkStyle} href="/" className="card-link">Company</a></li>
          <li><a style={linkStyle} href="/" className="card-link">Products</a></li>
          <li><a style={linkStyle} href="/" className="card-link">Contact us</a></li>
          <li><a style={linkStyle} href="/" className="card-link">News</a></li>
          <li><a style={linkStyle} href="/" className="card-link">Intranet</a></li>
        </ul>
      </div>
    </div>

    
  </div>
)

export default Footer