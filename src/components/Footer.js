import React from 'react'

const linkStyle = {
  color: 'white'
}

const footerStyle = {
  display: 'inline-block',
  backgroundColor: 'black'
};

const Footer = () => (

  <div className="container-fluid border-top py-2" style={footerStyle}>

    <div className="float-left">
       <h2 style={linkStyle}>Liana Technologies</h2>
       <p style={linkStyle}>Sales and inquiries</p>
       <p style={linkStyle}>Email: sales@lianatech.com</p>
       <p style={linkStyle}>Phone: +358 10 387 7053 </p>
       <button type="button" className="btn btn-success">Contact us</button>
    </div>
    <div className="float-right">
       <a style={linkStyle} href="/" className="card-link">Company</a>
       <a style={linkStyle} href="/" className="card-link">Products</a>
       <a style={linkStyle} href="/" className="card-link">Contact us</a>
       <a style={linkStyle} href="/" className="card-link">News</a>
       <a style={linkStyle} href="/" className="card-link">Intranet</a>
    </div>

  </div>
)

export default Footer