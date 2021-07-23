import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, prettyDOM } from "@testing-library/react";
import BtnLogout from "./BtnLogout";

test("renders content", () => {
  const component = render(<BtnLogout />);

  const button = component.getByTestId("custom-element");

  expect(button).not.toHaveStyle("display:none"); //Verificamos que el boton aparezca cuando
  fireEvent.click(button); //loguea, al igual que verificamos que se le pueda dar click
});
