import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "@/app/register/page";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ id: 101, username: "testuser" }),
  })
);

describe("RegisterPage", () => {
  beforeEach(() => {
    render(<RegisterPage />);
  });

  it("registers successfully", async () => {
    fireEvent.change(screen.getByPlaceholderText("Username"), {
      target: { value: "testuser" },
    });

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password" },
    });

    fireEvent.click(screen.getByText("Register"));

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(fetch).toHaveBeenCalledWith("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 100,
        username: "testuser",
        password: "password",
      }),
    });

    expect(screen.getByPlaceholderText("Username").value).toBe("");
    expect(screen.getByPlaceholderText("Password").value).toBe("");
  });
});
