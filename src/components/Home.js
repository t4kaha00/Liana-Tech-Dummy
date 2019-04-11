import React from 'react'
import { Card, CardDeck, Jumbotron, Button } from 'react-bootstrap';
import "./home.css"
import Footer from './Footer'

const Home = () => (

  <div className="wrapper">

    <section className="section parallax justify-content-center align-items-center" style={{display: 'flex', 'flexDirection': 'column', 'alignItems': 'center',  'justifyContent': 'center', color: 'white'}}>
      <h1 className=" font-weight-light lg">Software fueling digital marketing</h1>
      <Button variant="success" href="/news">Learn More</Button>
    </section>

    <section className=" static">

      <CardDeck className="py-5 px-5 bg-light" height={200}>
        <Card className="text-center my-auto" text="light" >
          <Card.Img src={require("../images/company.png")} className="img-fluid" alt="Card image" fluid/>
          <Card.ImgOverlay className="m-auto h-50">
              <Card.Title className="card-body">Company</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-center my-auto" text="light">
          <Card.Img src={require("../images/products.png")} alt="Card image" />
          <Card.ImgOverlay className="m-auto h-50">
              <Card.Title className="card-body py-auto">Products</Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-center my-auto" text="light">
          <Card.Img src={require("../images/contact.png")} alt="Card image" />
          <Card.ImgOverlay className="m-auto h-50">
            <Card.Title className="card-body">Contact Us</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </CardDeck>

      <Jumbotron className="text-center p-4">
        <h4>Latest News</h4>
        <CardDeck className="pm-8 text-center">
          <Card className="p-4 text-left" style={{ width: '18rem' }}>
              <small className="text-muted mb-2">
                  27.07.2016
              </small>
              <Card.Text>
                  Liana Technologies and Encode Solutions merge to create unique mobile solutions
              </Card.Text>
          </Card>
          <Card className="p-4 text-left" style={{ width: '18rem' }}>
              <small className="text-muted mb-2">
                  28.01.2016
              </small>
              <Card.Text>
                  From a local startup to a global player: Liana Technologies among the forerunners of digital marketing technology
              </Card.Text>
          </Card>
          <Card className="p-4 text-left" style={{ width: '18rem' }}>
              <small className="text-muted mb-2">
                  02.07.2015
              </small>
              <Card.Text>
                  Liana Technologies Hong Kong launched a series od digital marketing events in June
              </Card.Text>
          </Card>
        </CardDeck>
      </Jumbotron>

      <div id="references" className="container-fluid bg-white px-md-5 px-0 py-3">
        <h3 className="py-3 text-dark text-center">References</h3>

          <div className="row mx-auto px-5">
            <div className="col-md-3 col-sm-6 px-md-2 px-0 py-2 my-2">
              <div className="card h-100">
                <img className="card-img-top" src={require("../images/bosch.png")} alt="bosch"/>
                <div className="border-top card-body text-center">
                  <h5 className="card-title">Robert Bosch</h5>
                  <p className="card-text text-dark">Bosch is a multinational engineering and electronics company.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-2 py-2 my-2">
              <div className="card h-100">
                <img className="card-img-top" src={require("../images/thebodyshop.png")} alt="The Body Shop"/>
                <div className="border-top card-body text-center">
                  <h5 className="card-title">The Body Shop</h5>
                  <p className="card-text text-dark">The Body Shop is a global beauty brand and it has more than 3,000 stores in more than 60 countries.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-2 py-2 my-2">
              <div className="card h-100">
                <img className="card-img-top" src={require("../images/laplandhotels.png")} alt="Lapland Hotels"/>
                <div className="border-top card-body text-center">
                  <h5 className="card-title">Lapland Hotels</h5>
                  <p className="card-text text-dark">Lapland Hotels is the largest and the most diverse hotel chain in Lapland.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 px-2 py-2 my-2">
              <div className="card h-100">
                <img className="card-img-top" src={require("../images/ikea.png")} alt="IKEA"/>
                <div className="border-top card-body text-center">
                  <h5 className="card-title">IKEA</h5>
                  <p className="card-text text-dark">IKEA is a multinational furniture store.</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div id="subscribe" className="container-fluid text-center border-top px-0 py-3 mt-5">
        <h3 className="py-3 text-dark ">Subscribe to our newsletter</h3>
        <p className="text-dark">Follow our story and get the latest promotonial news about our products and events.</p>
        <div className="col-md-6 col-xs-12 input-group input-group-lg my-3 mx-auto">
          <input id="email" className="form-control mr-2" type="text" placeholder="Your email address" aria-label="Email address"/>
          <button id="subscribeBtn" className="btn btn-success " type="button">Subscribe</button>
        </div>
        <p id="subscription-msg" className="text-danger"></p>
      </div>

      
    </section>
    <Footer />
  </div>
)

export default Home