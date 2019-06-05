import React from "react";
import { shallow } from "enzyme";
import User from "./User";

describe("User", () => {
  it("should render without error", () => {
    const wrapper = shallow(<User />);
    expect(wrapper.find("div").length).toBe(1);
  });
});
