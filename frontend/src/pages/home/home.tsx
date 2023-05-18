import { useState } from "react";

import LoginComponent from "../../components/credentials/login";
import { SignupComponent } from "../../components/credentials/signup";

export const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(true);

  const clickLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const clickSignup = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
  };

  return (
    <div className="home-contents">
      <div className="welcome-message">
        <div className="welcome-message-content">
          <img
            className="logo"
            src={require("./../../assets/icons/company-logo.png")}
            width={100}
            height={100}
            alt="card-image"
          />
          <h1 className="welcome-message-h1">Welcome</h1>
          <h3 className="welcome-message-h3">
            Your Pharmacy Assistant Manager
          </h3>
          <p className="welcome-message-p">
            An inventory management system that makes organising, access and
            retrieval of all pharmacy data and information easy
          </p>

          <div className="welcome-message-buttons">
            <button className="button">Signup</button>
            <button className="button">Login</button>
          </div>
          <div className="proudly">
            <p>Proudly ugandan</p>
            <img
              className="flag"
              src={require("./../../assets/images/flag.jpg")}
              alt="ugandan-flag"
            />
            <a className="contact-us" href="">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
