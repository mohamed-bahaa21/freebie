import React from 'react';
import axios from 'axios'
// import {postUrl} from '../../postUrls'

import { Row, Col } from 'react-bootstrap';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      name: '',
      email: '',
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
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
      email: this.state.email
    }

    console.log(user);

    axios.post("https://freebie-project.herokuapp.com/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: ''
    })
  }








  render() {
    const { name, email } = this.state;
    return (
      <div className='sign-up'>
        <form className='sign-up-form' onSubmit={this.onSubmit}>
          <FormInput
            required
            type='text'
            name='displayName'
            value={name}
            onChange={this.onChangeName}
            label='Display Name'
          />

          <p className="break-line">
            <span className="line-left">_____________</span>
            Or
            <span className="line-right">_____________</span>
          </p>

          <FormInput
            required
            type='email'
            name='email'
            value={email}
            onChange={this.onChangeEmail}
            label='Email'
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
