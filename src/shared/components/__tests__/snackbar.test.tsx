import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { SnackbarNotification } from "../snackbar-notification.component";
import { useSnackbarStore } from "../../store/snackbar.store";
import { beforeEach, describe, expect, it } from "vitest";

describe("SnackbarNotification", () => {
  beforeEach(() => {
    useSnackbarStore.setState({
      open: false,
      message: "",
      severity: "info",
      showSnackbar: useSnackbarStore.getState().showSnackbar,
      closeSnackbar: useSnackbarStore.getState().closeSnackbar,
    });
  });

  it("should not render anything when snackbar is closed", () => {
    render(<SnackbarNotification />);
    const alert = screen.queryByRole("alert");
    expect(alert).not.toBeInTheDocument();
  });

  it("should render message and severity when open", () => {
    useSnackbarStore.setState({
      open: true,
      message: "Test Message",
      severity: "success",
    });

    render(<SnackbarNotification />);
    expect(screen.getByText("Test Message")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveClass("MuiAlert-filledSuccess"); // check style
  });

  it("should close when close button is clicked", async () => {
    useSnackbarStore.setState({
      open: true,
      message: "Close me",
      severity: "error",
    });

    render(<SnackbarNotification />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(useSnackbarStore.getState().open).toBe(false);
    });
  });
});
