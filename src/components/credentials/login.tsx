import { Form, Row, Col } from 'react-bootstrap';
import { Colors } from '../../constants/colors';
import { ButtonComponent } from '../button';

import { useRouting } from '../../services/routing';


const LoginComponent = () => {

  const  { navigateTo } = useRouting();

  const loginClicked = () => {
    navigateTo('/dashboard');
  }

  return (
    <div>
       <div className="sign-login-div">
          <h2> Login </h2>
     <Form>
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
        <ButtonComponent color={Colors.BTN_BLUE}  text='Login' textColor="white" onClick={loginClicked} />
        </Col>
      </Row>
      </Form>

      <p> or </p>

      <ButtonComponent color={Colors.BTN_WHITE}  text='Google' textColor="black" onClick={loginClicked} />
      
        </div>
    </div>
  )
}

export default LoginComponent
