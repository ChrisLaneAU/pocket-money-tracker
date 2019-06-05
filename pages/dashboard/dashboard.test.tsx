import React from "react";
import { mount } from "enzyme";
import Dashboard from "./index";

describe("Dashboard", () => {
  const wrapper = mount(<Dashboard />);
  it("should render without error", () => {
    expect(wrapper.find("div").length).not.toBe(0);
  });
  it("should render the Layout component", () => {
    expect(wrapper.find(".main-layout").length).toBe(1);
  });
});
