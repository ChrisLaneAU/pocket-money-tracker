import React from "react"
import { shallow } from "enzyme"
import Layout from "./Layout";

describe("Layout", () => {
  it("should render without error", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.find("section").length).toBe(1);
  });
});
