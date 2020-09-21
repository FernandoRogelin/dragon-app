import React from "react";
import { render, act, waitForElement } from "@testing-library/react";
import { Server } from "miragejs";

import Dragon from "..";

const promise = Promise.resolve();

let server;

describe("Dragon list component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    server = new Server();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("Snapshot test", async () => {
    const { container, getByTestId } = render(<Dragon />);

    server.get(
      "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
      () => [{ id: 1, name: "Drake", type: "Orange", createdAt: "20/09/2020" }]
    );

    await waitForElement(() => getByTestId("items"));

    expect(getByTestId("nameDragon")).toHaveTextContent("Drake");

    expect(container.firstChild).toMatchSnapshot();

    await act(() => promise);
  });
});
