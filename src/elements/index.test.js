import React from "react";
import { getByText, render } from "@testing-library/react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Button from "./index";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(getByText(/loading/i));

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link" isExternal></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
