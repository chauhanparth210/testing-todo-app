import React from "react";
import { mount } from "enzyme";
import App from "./App";

describe("App component testing", () => {
  let wrapper;

  it("should render App component", () => {
    wrapper = mount(<App />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
