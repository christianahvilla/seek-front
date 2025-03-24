import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import LoginPage from "../login.page";

vi.mock("../../services/login.service", () => ({
  loginService: vi.fn().mockResolvedValue("mocked-token"),
}));
vi.mock("../../store/auth.store", () => ({
  useAuthStore: () => ({
    setToken: vi.fn(),
  }),
}));

describe("LoginPage", () => {
  it("renders form inputs and submit button", () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/Email Required/i)).toBeInTheDocument();
      expect(screen.getByText(/At least 6 characters/i)).toBeInTheDocument();
    });
  });
});
