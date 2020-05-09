import React from "react";
import { render } from "../../tests/test-utils";

import Logo from "./Logo";

test("Logo snapshot test", () => {
  const { container } = render(<Logo />);

  // Asserts Logo component matches snapshot.
  expect(container.firstChild).toMatchSnapshot();
});

test("Logo renders as img", () => {
  const { getByTestId } = render(<Logo />);
  const renderedLogo = getByTestId("Logo") as HTMLImageElement;

  // Asserts Logo component is of type IMG
  expect(renderedLogo.tagName).toBe("IMG");

  // Asserts alt text is "logo"
  expect(renderedLogo.alt).toBe("logo");
});
