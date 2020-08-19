import React from 'react';
import axios from 'axios'
// import {postUrl} from '../../postUrls'

import { Row, Col, Alert } from 'react-bootstrap';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.flash = this.flash.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      phone: '',
      email: '',
      msg: ''
    }
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      phone: this.state.phone,
      email: this.state.email
    }

    console.log(user);

    axios.post("https://freebie-project.herokuapp.com/users/add", user)
      .then(res => {
        this.setState({
          msg: res.data,
          phone: '',
          email: ''
        })
      });
  }

  flash() {
    const msg = this.state.msg;
    if (msg !== "") {
      return (
        <Alert variant="success">
          <span className='flash'>You Signed Up Successfully!</span>
        </Alert>
      )
    }
    return;
  }

  render() {
    const { phone, email } = this.state;
    return (
      <div className='sign-up'>

        {this.flash()}

        <form className='sign-up-form' onSubmit={this.onSubmit}>

          <FormInput
            required
            type='number'
            name='phone'
            value={phone}
            onChange={this.onChangePhone}
            label='Phone Number'
          />

          <p className="break-line">
            <span className="line-left">_____________</span>
            And
            <span className="line-right">_____________</span>
          </p>

          <FormInput
            required
            type='email'
            name='email'
            value={email}
            onChange={this.onChangeEmail}
            label='E-mail Address'
          />

          <CustomButton type='submit'>Get Started</CustomButton>

          <p className="break-line">
            <span className="line-left">______</span>
            Comming Soon
            <span className="line-right">______</span>
          </p>


          <Row>
            <Col>
              <div className='app-store'></div>
            </Col>
            <Col>
              <div className='google-play'></div>
            </Col>
          </Row>


        </form>
      </div>
    );
  }
}

export default SignUp;
