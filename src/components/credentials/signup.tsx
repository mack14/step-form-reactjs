import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useRouting } from "../../services/routing";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleButton from 'react-google-button'

export const SignupComponent = () => {

  const route = useRouting();

  const signupClicked = () => {
    route.navigateTo('/dashboard');
  }

  return (
      <div className="sign-login-div">
        <Form>
            <FontAwesomeIcon icon={faCircleUser} size="4x" style={{ color: "#ffffff" }} />
            <Row>
              <Col md={12}>
                <Form.Group className="mb-2" controlId="">
                  <Form.Control required type="text" placeholder="First name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-2" controlId="">
                  <Form.Control required type="text" placeholder="Surname" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Control required type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control required type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <button className="signup-button credential-button" type="submit" onClick={signupClicked}>Sign Up</button>
              </Col>
            </Row>
            <Row>
              <Col className='pt-2' md={12}>
                <GoogleButton className='credential-button' label='Sign up with Google' onClick={signupClicked} />
              </Col>
            </Row>
          </Form>
        </div>
  );

};