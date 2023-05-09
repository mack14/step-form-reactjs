import { useState } from 'react';

import LoginComponent from '../../components/credentials/login';
import { SignupComponent } from '../../components/credentials/signup';

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
          <img className='logo' src={require('./../../assets/icons/company-logo.png')} width={100} height={100} alt="card-image" />
          <h1>Welcome</h1>
          <h3>To your < text style={{ color: "#EFC90A", }}>Pharmacy Assistant Manager</text></h3>
          <p>An inventory management system that makes organising, access and retrieval of all pharmacy data and information easy</p>
        </div>
        <div className='welcome-message-footer'>
          <span>Proudly Ugandan <img className='contry-flag ms-2' src={require('./../../assets/icons/uganda-flag.png')} width={40} height={40} alt="card-image" /></span>
          <a className='ms-2' href="martin_t@zaantu.com">Contact Us</a>
        </div>
      </div>

    <div className="credentials-divs">

      {/* signup part */}
      {showSignup && (
        <div className='form-bottom-link'>
          <SignupComponent />
         <p className="pt-3 text-center"> Already have an account? <a data-testid="login-link"  onClick={clickLogin}> Login </a></p>
        </div>
      )}
      {/* login part */}
      {showLogin && (
        <div className='form-bottom-link'>
          <LoginComponent />
          <p className="pt-3 text-center"> Don't have an account! <a data-testid="signup-link"  onClick={clickSignup}> Sign Up </a></p>
        </div>
      )}

      {/* <p className="footer-text"> ©️ 2023 Pharma Vault</p> */}

    </div>
      
    </div>
  );
};
