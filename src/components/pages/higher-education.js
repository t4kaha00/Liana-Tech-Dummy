import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../Footer'

  const HigherEducation = () => (
    <div>
      <div className="w-90 mx-5" style={{marginTop: '140px'}}>
        <Container>
          <Row>
            <Col md={8}>
              <h2>Free Download: Digital Marketing for Higher Education</h2>
              <p>Universities need to be on top of things when it comes to digital marketing and communication. The competition for students is fierce, and communication to faculty, stakeholders and alumni is crucial.</p>
              <p>In this guide you will learn how to use digital marketing to:</p>

              <ul>
                <li>Acquire new students.</li>
                <li>Streamline the process of applying.</li>
                <li>Help your students through their studies.</li>
                <li>Use digital marketing tools for internal communication.</li>
                <li>Communicate to alumni and stakeholders.</li>
              </ul>
            </Col>
            <Col md={4}>
              <p>
                <img src="../src/images/higher-education.jpg" alt="Digital Marketing for Higher Education"
                className="align-self-center img-fluid"/>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  )

  export default HigherEducation