import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '../../pages/home/home';

describe('Testing the Signup and Login divs', () => {

  test('Render signup form by default', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const signupDiv = getByTestId('signup-div');
    expect(signupDiv).toBeInTheDocument();
  });

  test('Do not render login form', () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
    const loginDiv = queryByTestId('login-div');
    expect(loginDiv).toBeNull();
  });

  test('Show login form when login link is clicked', () => {
    const { getByTestId, queryByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const loginButton = getByTestId('login-link');
    fireEvent.click(loginButton);

    const loginDiv = getByTestId('login-div');
    expect(loginDiv).toBeInTheDocument();

    const signupDiv = queryByTestId('signup-div');
    expect(signupDiv).toBeNull();
  });

  test('Show signup form when signup link is clicked', () => {
    const { getByTestId, queryByTestId } = render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const loginButton = getByTestId('login-link');
    fireEvent.click(loginButton);

    const signupbutton = getByTestId('signup-link');
    fireEvent.click(signupbutton);

    const signupDiv = getByTestId('signup-div');
    expect(signupDiv).toBeInTheDocument();

    const loginDiv = queryByTestId('login-div');
    expect(loginDiv).toBeNull();
  });

});




