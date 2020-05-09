import React from "react";
import { fireEvent, render } from "../../tests/test-utils";
import Button from "./Button";

const onClick = jest.fn();

test("Button primary variant snapshot test", () => {
  const { container } = render(
    <Button onClick={() => onClick()}>Primary button</Button>,
  );

  // Asserts Button component matches snapshot.
  expect(container.firstChild).toMatchSnapshot();
});

test("Button tertiary variant snapshot test", () => {
  const { container } = render(
    <Button variant="tertiary" onClick={() => onClick()}>
      Tertiary button
    </Button>,
  );

  // Asserts Button component matches snapshot.
  expect(container.firstChild).toMatchSnapshot();
});

test("Button text variant snapshot test", () => {
  const { container } = render(
    <Button variant="text" onClick={() => onClick()}>
      Text button
    </Button>,
  );

  // Asserts Button component matches snapshot.
  expect(container.firstChild).toMatchSnapshot();
});

test("Button with leading icon snapshot test", () => {
  const { container } = render(
    <Button onClick={() => onClick()} leadingIcon="fas fa-alien">
      Text button
    </Button>,
  );

  // Asserts Button component matches snapshot.
  expect(container.firstChild).toMatchSnapshot();
});

test("Button with children rendered correctly.", () => {
  const { getByTestId } = render(
    <Button data-testid="Button" onClick={() => onClick()}>
      Click Me!
    </Button>,
  );
  const renderedButton = getByTestId("Button");

  // Asserts Button component is of type button
  expect(renderedButton.tagName).toBe("BUTTON");

  // Asserts Button component renders children correctly.
  expect(renderedButton.textContent).toBe("Click Me!");
});

test("Button with onClick event fired correctly", () => {
  const { getByTestId } = render(
    <Button data-testid="Button" onClick={() => onClick()}>
      Click Test
    </Button>,
  );

  const renderedButton = getByTestId("Button");

  // Asserts Button click event is fired correctly.
  fireEvent.click(renderedButton);
  expect(onClick).toHaveBeenCalledTimes(1);
});

test("Button with leading icon renders icon", () => {
  const { getByTestId } = render(
    <Button
      data-testid="Button"
      onClick={() => onClick()}
      leadingIcon="fas fa-alien"
    >
      Click me!
    </Button>,
  );

  const renderedButton = getByTestId("Button");
  const icon = renderedButton.querySelector("i");

  // Asserts icon is of type I
  expect(icon?.tagName).toBe("I");
});
