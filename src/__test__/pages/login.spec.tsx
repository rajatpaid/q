import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "../../pages/Auth/login/login";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  test("renders login page", () => {
    render(
      <BrowserRouter>
        <LoginPage></LoginPage>
      </BrowserRouter>
    );

    expect(screen.getByText("Welcome back")).toBeInTheDocument();
    expect(screen.getByText("Login to the Dashboard")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Sign in using Popup" })
    ).toBeInTheDocument();
    // expect(
    //   screen.getByRole("button", { name: "Sign in using Redirect" })
    // ).toBeInTheDocument();

    const logo = screen.getAllByRole("img")[0];
    expect(logo).toHaveAttribute("src", "login.png");
  });

  it("handles click events", () => {
    const handleLogin = jest.fn();
    render(
      <BrowserRouter>
        <LoginPage></LoginPage>
      </BrowserRouter>
    );

    let loginButton=screen.getByRole("button")
    expect(loginButton).toBeInTheDocument();
     fireEvent.click(loginButton)
    // expect(handleLogin).toHaveBeenCalled();
    
  });
});
