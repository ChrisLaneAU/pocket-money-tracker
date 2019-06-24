import React from "react";
import { shallow } from "enzyme";
import Index from "../pages/index/index";

describe("Index", () => {
  it("should render with error", () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find("section").length).toBe(1);
  });
});
