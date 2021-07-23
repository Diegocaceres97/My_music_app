import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./login";

test('logo must have alt="logo"', () => {
  const component = render(<Login />);

  component.getByAltText("logo");
  component.getByText("Login");
});

test("clicking the button calls event handler once", () => {
  render(<Login />);

  const button = screen.getByText("Login");

  fireEvent.click(button);
});
