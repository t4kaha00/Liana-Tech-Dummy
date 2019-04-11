import React from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import "./home.css"
import Footer from './Footer'

const News = () => (
  <div className="bg-light wrapper">

  <Container className="px-5" style={{marginTop: '140px'}}>
    <Row>
      <Col>
        <Link to="/pages/digital-marketing">
          <Jumbotron className="p-0 bg-light h-50" style={{flex: '0 0 50%'}}>
            <img src={require("../images/digital.jpg")}
              alt="Digital Marketing in 2022"
              style={{width: '100%'}}
              className="align-self-center pb-3"/>
            <h2>
              14 Digital Marketing Predictions for 2022 [+ Infographic]
            </h2>
          </Jumbotron>
        </Link>
      </Col>
    </Row>
    <Row>
      <Col>
        <Link to="/pages/google-display">
          <Jumbotron className="p-0 bg-light">
            <img src={require("../images/google-display.jpg")}
              alt="Google Display Ads"
              style={{width: '100%'}}
              className="align-self-center pb-3"/>
            <h2>
              A Beginner's Guide to Google Display Ads [Infographic]
            </h2>
            </Jumbotron>
          </Link>
        </Col>
        <Col>
          <Link to="/pages/higher-education">
            <Jumbotron className="p-0 bg-light">
              <img src={require("../images/digital-marketing-guide.jpg")}
                alt="Webinar recording"
                style={{width: '100%'}}
                className="align-self-center pb-3 img-fluid"/>
              </Jumbotron>
            </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/pages/webinar-recording">
            <Jumbotron className="p-0 bg-light">
              <img src={require("../images/webinar-recording.jpg")}
                alt="Webinar Recording"
                style={{width: '100%'}}
                className="align-self-center pb-3 img-fluid"/>
            </Jumbotron>
          </Link>
        </Col>
        <Col>
          <Link to="/pages/ai">
            <Jumbotron className="p-0 bg-light">
              <img src={require("../images/ai.jpg")}
                alt="AI"
                style={{width: '100%'}}
                className="align-self-center pb-3 img-fluid"/>
                <h2>
                  AI helps you to measure your communications and target your content
                </h2>
              </Jumbotron>
            </Link>
        </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/pages/media-monitor">
              <Jumbotron className="p-0 bg-light">
                <img src={require("../images/media-monitoring.jpg")}
                alt="Media Monitor"
                style={{width: '100%'}}
                className="align-self-center pb-3 img-fluid"/>
                <h2>
                  6 Reasons why Media Monitoring is Important for your Business
                </h2>
                </Jumbotron>
              </Link>
            </Col>
            <Col>
              <Link to="/pages/email-marketing">
                <Jumbotron className="p-0 bg-light">
                  <img src={require("../images/email-marketing.jpg")}
                    alt="Email Marketing"
                    style={{width: '100%'}}
                    className="align-self-center pb-3 img-fluid"/>
                  </Jumbotron>
                </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/pages/education-marketing">
                <Jumbotron className="w-100 p-0 bg-light">
                  <img src={require("../images/education-marketing.jpg")}
                    alt="5 Tips to Succeed in Higher Education Marketing"
                    style={{width: '100%'}}
                    className="align-self-center pb-3 img-fluid"/>
                  <h2>
                    5 Tips to Succeed in Higher Education Marketing
                  </h2>
                </Jumbotron>
              </Link>
            </Col>
          </Row>
      </Container>
      <Footer />
    </div>
)
export default News