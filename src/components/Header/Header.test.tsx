import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import Header from "./";

describe("Header Component", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("renders logo and title", () => {
    const logo = screen.getByText(/"AC-Logo"/i);
    expect(logo).toBeInTheDocument();

    // check if App components renders text learn
    const title = screen.getByText(/AC Countries/i);
    expect(title).toBeInTheDocument();
  });
});
