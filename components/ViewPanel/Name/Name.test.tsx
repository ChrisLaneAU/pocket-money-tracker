import React from "react";
import { shallow } from "enzyme";
import Name from "./Name";

describe("Name", () => {
  it("should render without error", () => {
    const wrapper = shallow(<Name name="" currentPage="" />);
    expect(wrapper.find(".name").length).toBe(1);
  });
});
