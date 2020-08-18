import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './FooterSect.styles.scss';

const FooterSect = () => (
  <div className="footer-sect">
    <hr />

    <Container className='footer-cont'>
      <Row className='footer-row'>
        <Col xs={6}>
          <span>&copy; Freebie 2020, Inc.</span>

          <a href="/">Team</a>
        </Col>

        <Col xs={6}>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Use</a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FooterSect;
