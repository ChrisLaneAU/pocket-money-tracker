import React from "react";
import { shallow } from "enzyme";
import ViewPanel from "./ViewPanel";

describe("ViewPanel", () => {
  it("should render without error", () => {
    const wrapper = shallow(<ViewPanel />);
    expect(wrapper.find(".view-panel").length).toBe(1);
  });
});
