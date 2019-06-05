import React from "react";
import { shallow } from "enzyme";
import NavPanel from "./NavPanel";

describe("NavPanel", () => {
  it("should render without error", () => {
    const wrapper = shallow(<NavPanel />);
    expect(wrapper.find(".nav-panel").length).toBe(1);
  });
});
