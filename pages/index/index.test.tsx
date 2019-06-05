import React from "react";
import { shallow } from "enzyme";
import Index from "./index";

describe("Index", () => {
  it("should render with error", () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find("div").length).toBe(1);
  });
});
