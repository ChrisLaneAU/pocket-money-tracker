import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render without error", () => {
    const wrapper = shallow(<Layout>mock-children</Layout>);
    expect(wrapper.find(".section-layout").length).toBe(1);
  });
});
