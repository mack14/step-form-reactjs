import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import { Colors } from '../../constants/colors';
import { ButtonComponent } from '../button';

import { useRouting } from '../../services/routing';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LoginComponent = () => {

  const  { navigateTo } = useRouting();

  const loginClicked = () => {
    navigateTo('/dashboard');
  }

  return (
    <div>
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
            <Col md = {12}>
              <button className="button1" type="submit" onClick={loginClicked}>log In</button>
              <button className="button2" type="submit" onClick={loginClicked}>Google</button>
            </Col>
          </Row>
        </Form>
        </div>
    </div>
  )
}

export default LoginComponent
