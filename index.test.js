import React from "react";
import { render } from "@testing-library/react";

import NeedsOnline from "./index";

Object.defineProperty(global, "navigator", {
  value: global.navigator,
  configurable: true,
  enumerable: true,
  writable: true
});

const realNavigator = global.navigator;

describe("<NeedsOnline/>", () => {
  afterEach(() => {
    global.navigator = realNavigator;
  });

  it("renders a message if navigator is offline", () => {
    global.navigator = {
      onLine: false
    };
    const { getByTestId } = render(<NeedsOnline />);
    expect(getByTestId("needs-online").textContent).toBe("Offline");
  });

  it("renders a message if navigator is online", () => {
    global.navigator = {
      onLine: true
    };
    const { getByTestId } = render(<NeedsOnline />);
    expect(getByTestId("needs-online").textContent).toBe("Online");
  });
});
