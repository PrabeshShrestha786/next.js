import { render, screen } from "@testing-library/react";
import Greeting from "../src/components/Greeting";

test("renders greeting text", () => {
  render(<Greeting name="Next.js" />);
  expect(screen.getByText("Hello, Next.js!")).toBeInTheDocument();
});
