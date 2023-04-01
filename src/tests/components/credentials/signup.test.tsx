import { render, screen, fireEvent } from "@testing-library/react";
import { useRouting } from "../../../services/routing";
import { SignupComponent } from "../../../components/credentials/signup";

jest.mock("../../../services/routing", () => ({
  useRouting: jest.fn(),
}));

describe("SignupComponent", () => {
  beforeEach(() => {
    (useRouting as jest.Mock).mockReturnValue({
      navigateTo: jest.fn(),
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should call navigateTo when the sign up button is clicked", () => {
    render(<SignupComponent />);
    const signupBtn = screen.getByTestId("signup-form");

    fireEvent.submit(signupBtn);
    expect(useRouting().navigateTo).toHaveBeenCalledWith("/dashboard");
  });
});
