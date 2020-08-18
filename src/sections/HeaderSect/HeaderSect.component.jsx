import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import SignUp from '../../components/sign-up/sign-up.component';

import './HeaderSect.styles.scss';

const HeaderSect = () => (
  <div>
    <Container className="header-sect">
        <Row>
          <Col>
            <h2 className='title'>A free mobile app to Find or Donate free stuff in your community.</h2>
            <span>Sign up and we’ll send you a link on launch date!</span>
          </Col>
          <Col className='no-title'>
          </Col>
        </Row>
      </Container>


      <Container className="signup-col">
        <Row className='header-row' noGutters={true}>
          <Col>
            <SignUp />
          </Col>

          <Col xs={6} className='chars-col'>
          </Col>

          <Col className='mobile-col'>
          </Col>
        </Row>
      </Container>
  </div>
);

export default HeaderSect;
