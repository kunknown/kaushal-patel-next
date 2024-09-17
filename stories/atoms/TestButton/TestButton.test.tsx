import { TestButton } from "@/lib/ui-components/atoms/TestButton/TestButton";
import { render, screen, waitFor } from "@testing-library/react";

describe("button", () => {
  it("should render", () => {
    render(<TestButton label="Test" backgroundColor="green" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
