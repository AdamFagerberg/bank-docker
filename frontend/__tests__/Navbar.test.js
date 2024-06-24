import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";

describe("Navbar", () => {
  it("renders the navbar links", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("Home");
    expect(homeLink.getAttribute("href")).toBe("/");

    const loginLink = screen.getByText("Log in");
    expect(loginLink.getAttribute("href")).toBe("/login");

    const registerLink = screen.getByText("Register");
    expect(registerLink.getAttribute("href")).toBe("/register");
  });
});
