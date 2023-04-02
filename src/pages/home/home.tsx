import { useState } from 'react';

import LoginComponent from '../../components/credentials/login';
import { SignupComponent } from '../../components/credentials/signup';

import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const HomePage = () => {

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const clickLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  }

  const clickSignup = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
  }

  return (
    <div className='home-contents'>

      <div className='welcome-message-container'>
        <div className="welcome-message">
          <FontAwesomeIcon icon={faCircleUser} size="4x" style={{ color: "#ffffff", }} />
          <h1>Welcome</h1>
          <h3>To your < text style={{ color: "#EFC90A", }}>Pharmacy Assistant Manager</text></h3>
          <p>An inventory managemwnt system that makes organising, access and retrieval of all pharmacy data and information easy</p>
        </div>
        <div className='welcome-message-footer'>
          <text>Proudly Ugandan <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{ color: "#250844;", }} /></text>
          <a href="mailto:johndoe@mail.com">Contact Us</a>
        </div>
      </div>

    <div className="credentials-divs">

      {/* signup part */}
      {showSignup && (
        <div>
          <SignupComponent />
          <p className="pt-3 text-center"> Already have an account? <a onClick={clickLogin}> Login </a></p>
        </div>
      )}
      {/* login part */}
      {showLogin && (
        <div>
          <LoginComponent />
          <p className="pt-3 text-center"> Don't have an account! <a onClick={clickSignup}> Sign Up </a></p>
        </div>
      )}

      {/* <p className="footer-text"> ©️ 2023 Pharma Vault</p> */}

    </div>
      
    </div>
  );
};
