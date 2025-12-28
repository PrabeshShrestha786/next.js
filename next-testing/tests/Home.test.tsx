import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders the heading text", () => {
    render(<Home />);

    expect(
      screen.getByText(/to get started, edit the page\.tsx file\./i)
    ).toBeInTheDocument();
  });
});
