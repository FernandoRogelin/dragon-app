import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import Login from "..";
const promise = Promise.resolve();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Login page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Snapshot test", async () => {
    const { container } = render(<Login />);

    expect(container.firstChild).toMatchSnapshot();

    await act(() => promise);
  });

  test("Login account", async () => {
    const { getByTestId } = render(<Login />);

    const inputEmail = getByTestId("input-email");
    const inputPassword = getByTestId("input-password");

    await wait(() =>
      fireEvent.change(inputEmail, {
        target: { value: "fernando.rogelin@hotmail.com" },
      })
    );

    await wait(() =>
      fireEvent.change(inputPassword, { target: { value: "123456" } })
    );

    await fireEvent.click(getByTestId("button-login"));

    await act(() => promise);
  });
});
