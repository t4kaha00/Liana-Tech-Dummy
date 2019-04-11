import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer'

  const EmailMarketing = () => (
    <div>
      <div className="w-90 mx-5" style={{marginTop: '140px'}}>
        <Container>
          <Row>
            <Col md={8}>
              <h2>Guide: 6 Steps Towards Better Email Marketing</h2>

          	  <p>Email marketing is still the most important and profitable marketing channel for Liana Technologies' marketing team and we constantly utilize it in our day-to-day work. Here are our best tips on how to do effective email marketing – from marketers to marketers.</p>
              <p>In this guide for advanced email marketers, we will walk you through six steps you can take towards better email marketing:</p>
              <ul>
                <li>Step 1: Gather more subscribers</li>
                <li>Step 2: Use the full potential of your register</li>
                <li>Step 3: Target your content</li>
                <li>Step 4: Make your content relevant</li>
                <li>Step 5: Automate email marketing</li>
                <li>Step 6: Monitor, test and develop</li>
              </ul>
            </Col>
            <Col md={4}>
              <p>
                <img src="../src/images/email-marketing-1.jpg" alt="Email Marketing"
                className="align-self-center img-fluid"/>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  )
  export default EmailMarketing