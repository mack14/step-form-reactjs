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
           {/* signup part */}
            {showSignup && (
              <div>
                <SignupComponent />
                <p className="pt-3"> Already have an account? <a onClick={clickLogin}> Login </a></p>
              </div>
            )}
            {/* login part */}
            {showLogin && (
              <div>
                <LoginComponent />
                <p className="pt-3"> Don't have an account! <a onClick={clickSignup}> Sign Up </a></p> 
              </div>
            )}
             <p className="footer-text"> ©️ 2023 Pharma Vault</p>
    </div>
  );
};
