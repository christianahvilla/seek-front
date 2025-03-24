import { renderHook } from "@testing-library/react";
import { useAuth } from "../use-auth.hook";
import { describe, beforeEach, vi, it, expect } from "vitest";
import { TOKEN_KEY } from "../../auth.constants";

describe("useAuth", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.resetAllMocks();
  });

  it("should return false if no token exists", () => {
    const { result } = renderHook(() => useAuth());
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.token).toBeNull();
  });

  it("should return true if token exists", () => {
    localStorage.setItem(TOKEN_KEY, "mocked-token");
    const { result } = renderHook(() => useAuth());
    expect(result.current.isAuthenticated).toBe(true);
    expect(result.current.token).toBe("mocked-token");
  });

  it("should remove token and redirect on logout", () => {
    localStorage.setItem(TOKEN_KEY, "mocked-token");

    const mockAssign = vi.fn();
    Object.defineProperty(window, "location", {
      value: { assign: mockAssign },
      writable: true,
    });

    const { result } = renderHook(() => useAuth());
    result.current.logout();

    expect(localStorage.getItem(TOKEN_KEY)).toBeNull();
    expect(mockAssign).toHaveBeenCalledWith("/login");
  });
});
