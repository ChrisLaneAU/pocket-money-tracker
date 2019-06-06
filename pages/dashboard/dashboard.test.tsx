import React from "react";
import { mount } from "enzyme";
import Dashboard from "./index";

describe("Dashboard", () => {
  const wrapper = mount(<Dashboard />);
  it("should render without error", () => {
    expect(wrapper.find("div").length).not.toBe(0);
  });
  it("should render the Layout component", () => {
    expect(wrapper.find(".section-layout").length).toBe(1);
  });
  // it("should render the NavPanel component", () => {
  //   expect(wrapper.find("nav-panel").length).toBe(1);
  // });
});
