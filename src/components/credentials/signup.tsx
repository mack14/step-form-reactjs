import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Colors} from './../../constants/colors';

import { ButtonComponent } from "../button";
import { useRouting } from "../../services/routing";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SignupComponent = () => {

  const route = useRouting();

  const signupClicked = () => {
    route.navigateTo('/dashboard');
  }

    return (

        <div className="sign-login-div">
     <Form>
     <FontAwesomeIcon icon={faCircleUser} size="4x" style={{color: "#ffffff",}} />
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
        <Col md = {12}>
          <div className="remember">Remember me</div>
          <div className="forgot">Forgot Password?</div>
        </Col>
      </Row>
 
      <Row>
        <Col md = {12}>
          <Button className="button1" type="submit" onClick={signupClicked}>Sign Up</Button>
          <Button className="button2" type="submit" onClick={signupClicked}>Google</Button>
        </Col>
      </Row>
      </Form>

        </div>
   
    );

};