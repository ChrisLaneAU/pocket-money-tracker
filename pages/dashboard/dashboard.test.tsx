import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./index";

describe("Dashboard", () => {
  it("should render without error", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find("h1").length).toBe(1);
  });
});
