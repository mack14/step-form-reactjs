import { Form, Row, Col } from 'react-bootstrap';

import { useRouting } from '../../services/routing';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GoogleButton from 'react-google-button'

import './credentials.scss';

const LoginComponent = () => {

  const  { navigateTo } = useRouting();

  const loginClicked = () => {
    navigateTo('/dashboard');
  }

  return (
    <div className='content-box'>
        <div className='welcome-message-container'>
            <div className="welcome-message">
              <FontAwesomeIcon icon={faCircleUser} size="4x" style={{color: "#ffffff",}} />
              <h1>Welcome</h1>
              <h3>To your < text style={{color:"#EFC90A",}}>Pharmacy Assistant Manager</text></h3>
              <p>An inventory managemwnt system that makes organising, access and retrieval of all pharmacy data and information easy</p>
              
              <div className='welcome-message-footer'>
                <text>©️ 2023 Pharma Vault</text>
                <text>Proudly Ugandan <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{ color: "#250844;", }} /></text>
                <a href = "mailto:johndoe@mail.com">Contact Us</a>
              </div>
          </div>
      </div>

      <div className='form-container'>
        <div className="sign-login-div">
          <Form>
            <FontAwesomeIcon icon={faCircleUser} size="4x" style={{color: "#ffffff",}} />
            <Row>
              <Col md = {12}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control required type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md = {12}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control required type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <button className="signup-button credential-button" type="submit" onClick={loginClicked}>Log In</button>
              </Col>
            </Row>

            <Row>
              <Col className='pt-2' md={12}>
                <GoogleButton className='credential-button' onClick={loginClicked} />
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent
