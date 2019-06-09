import React from "react";
import { shallow } from "enzyme";
import BackButton from "./Backbutton";

describe("BackButton", () => {
  it("should render without error", () => {
    const wrapper = shallow(<BackButton />);
    expect(wrapper.find(".back-button").length).toBe(1);
  });
});
