import React from "react";
import { render, fireEvent, act, wait } from "@testing-library/react";

import Create from "..";

const promise = Promise.resolve();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Create dragon component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Snapshot test", async () => {
    const { container } = render(<Create />);

    expect(container.firstChild).toMatchSnapshot();

    await act(() => promise);
  });

  test("Create Dragon", async () => {
    const { getByTestId } = render(<Create />);

    const inputName = getByTestId("input-name");
    const inputType = getByTestId("input-type");
    const inputDate = getByTestId("input-createdAt");

    fireEvent.change(inputName, { target: { value: "Drakar" } });
    fireEvent.change(inputType, { target: { value: "Orange" } });
    fireEvent.change(inputDate, { target: { value: "20072020" } });

    await wait(() => fireEvent.click(getByTestId("button-create")));

    await act(() => promise);
  });
});
