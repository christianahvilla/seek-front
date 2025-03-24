import { httpClient } from "../../../../api/http-client.api";
import { loginService } from "../auth.service";
import { describe, expect, it, vi } from "vitest";

vi.mock("../../../../api/http-client.api", () => ({
  httpClient: {
    post: vi.fn(),
  },
}));

describe("loginService", () => {
  it("should call httpClient.post with credentials", async () => {
    const mockPost = httpClient.post as unknown as vi.Mock;

    mockPost.mockResolvedValue({ token: "mocked-token" });

    const result = await loginService({
      email: "test@mail.com",
      password: "1234",
    });

    console.log(result);
    expect(result).toBe("mocked-token");
  });
});
