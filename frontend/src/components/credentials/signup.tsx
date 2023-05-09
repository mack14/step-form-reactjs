import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useRouting } from "../../services/routing";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GoogleButton from 'react-google-button'

export const SignupComponent = () => {

  const route = useRouting();

  const handleSubmit = () => {
    route.navigateTo('/dashboard');
  }

  const handleGoogleButton = () => {

  }

  return (

    <div id="signup-div" data-testid="signup-div" className="sign-login-div">
      <Form onSubmit={handleSubmit} data-testid="signup-form">
        <FontAwesomeIcon icon={faCircleUser} size="4x" style={{ color: "#ffffff" }} />
        <Row>
          <Col md={12}>
            <Form.Group className="mb-2" controlId="">
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-2" controlId="">
              <Form.Control type="text" placeholder="Surname" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <button className="signup-button credential-button" data-testid="signup-btn" type="submit">Sign Up</button>
          </Col>
        </Row>

        <Row>
          <Col className='pt-2' md={12}>
            <GoogleButton className='credential-button' label='Sign up with Google' onClick={handleGoogleButton} />
          </Col>
        </Row>

      </Form>

    </div>

  );

};