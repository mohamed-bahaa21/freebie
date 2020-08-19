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
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangePhone = this.onChangePhone.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: '',
      phone: '',
      email: '',
      msg: {
        data: '',
        type: ''
      }
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
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
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email
    }

    console.log(user);

    axios.post("https://freebie-project.herokuapp.com/users/add", user)
      .then(res => {
        console.log(res.data);
        this.setState({
          msg: res.data,
          name: '',
          phone: '',
          email: ''
        })
      });
  }
  flash() {
    const msg = this.state.msg;
    if (msg) {
      return (
        <Alert variant={msg.type}>
          <span className='flash'>{msg.data}</span>
        </Alert>
      )
    }
    return;
  }

  render() {
    const { name, phone, email } = this.state;
    return (
      <div className='sign-up'>
        
        {this.flash()}

        <form className='sign-up-form' onSubmit={this.onSubmit}>

          <FormInput
            required
            type='text'
            name='name'
            value={name}
            onChange={this.onChangeName}
            label='Full Name'
          />

          <FormInput
            type='number'
            name='phone'
            value={phone}
            onChange={this.onChangePhone}
            label='Phone Number'
          />

          <p className="break-line">
            <span className="line-left">_____________</span>
            Or
            <span className="line-right">_____________</span>
          </p>

          <FormInput
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
