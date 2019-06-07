import React from "react";
import { shallow } from "enzyme";
import MainImage from "./MainImage";

describe("MainImage", () => {
  it("should render without error", () => {
    const wrapper = shallow(
      <MainImage image="" description="" currentPage="" />
    );
    expect(wrapper.find("img").length).toBe(1);
  });
});
