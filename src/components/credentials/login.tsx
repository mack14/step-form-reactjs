import { Form, Row, Col } from 'react-bootstrap';

import { useRouting } from '../../services/routing';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GoogleButton from 'react-google-button'

import './credentials.scss';

const LoginComponent = () => {

  const route = useRouting();

  const handleSubmit = () => {
    route.navigateTo('/dashboard');
  }

  const handleGoogleButton = () => {

  }

  return (
    <div>
      <div data-testid="login-div" className="sign-login-div">
        <Form onSubmit={handleSubmit} data-testid="login-form">
          <FontAwesomeIcon icon={faCircleUser} size="4x" style={{ color: "#ffffff", }} />
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control  type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control  type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <button className="signup-button credential-button" type="submit">Log In</button>
            </Col>
          </Row>

          <Row>
            <Col className='pt-2' md={12}>
              <GoogleButton className='credential-button' onClick={handleGoogleButton} />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default LoginComponent
