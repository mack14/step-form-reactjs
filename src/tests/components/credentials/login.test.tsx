import { render, screen, fireEvent } from "@testing-library/react";
import { useRouting } from "../../../services/routing";
import LoginComponent from "../../../components/credentials/login";

jest.mock("../../../services/routing", () => ({
  useRouting: jest.fn(),
}));

describe("Login button clicked", () => {
  beforeEach(() => {
    (useRouting as jest.Mock).mockReturnValue({
      navigateTo: jest.fn(),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should call navigate to dashboard when the login up button is clicked", () => {
    render(<LoginComponent />);
    const signupBtn = screen.getByTestId("login-form");

    fireEvent.submit(signupBtn);
    expect(useRouting().navigateTo).toHaveBeenCalledWith("/dashboard");
  });
});
