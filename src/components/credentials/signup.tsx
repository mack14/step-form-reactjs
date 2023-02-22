import React from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Colors} from './../../constants/colors';

import { ButtonComponent } from "../button";
import { text } from "stream/consumers";
import { useRouting } from "../../services/routing";

export const SignupComponent = () => {

  const route = useRouting();

  const signupClicked = () => {
    route.navigateTo('/dashboard');
  }

    return (

        <div className="sign-login-div">
          <h2> Sign up </h2>
     <Form>
     <Row>
        <Col md = {12}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md = {12}>
        <Form.Group className="mb-3" controlId="">
          <Form.Control required type="text" placeholder="Surname" />
        </Form.Group>
        </Col>
      </Row>

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
        <Col>
        <ButtonComponent color={Colors.BTN_BLUE}  text='Signup' textColor="white" type='submit' onClick={signupClicked} />
        </Col>
      </Row>
      </Form>

      <p> or </p>

<ButtonComponent color={Colors.BTN_WHITE}  text='Google' textColor="black" onClick={signupClicked} />
      
        </div>
   
    );

};