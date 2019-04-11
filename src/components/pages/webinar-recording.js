import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer'

  const WebinarRecording = () => (
    <div>
      <div className="w-90 mx-5" style={{marginTop: '140px'}}>
        <Container>
          <Row>
            <Col md={8}>
              <h2>Webinar Recording: How to Improve Open and Click-Through Rates?</h2>

          	  <p>Properly targeted newsletters will improve your open and click-through rates and ultimately will bring you more happy clients. How exactly can you make your email marketing highly targeted? Watch this webinar to find out.</p>
              <p>In this webinar, our Marketing Specialists Elena Bezborodova and Fanni Mäki went through:</p>
              <ul>
                <li>What are good open and click-through rates?</li>
                <li>Which metrics should you monitor to measure the effectiveness of your emails?</li>
                <li>How to target your emails to the right audience?</li>
                <li>How to generate revenue from email marketing?</li>
              </ul>
            </Col>
            <Col md={4}>
              <p>
                <img src="../src/images/webinar-recording.jpg" alt="Webinar Recording: How to Improve Open and Click-Through Rates?"
                className="align-self-center img-fluid"/>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  )

  export default WebinarRecording