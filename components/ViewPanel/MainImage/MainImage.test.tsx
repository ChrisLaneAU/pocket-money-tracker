import React from "react";
import { shallow } from "enzyme";
import MainImage from "./MainImage";

describe("MainImage", () => {
  it("should render without error", () => {
    const user = { id: 1, name: "", image: "" };
    const wrapper = shallow(<MainImage user={user} />);
    expect(wrapper.find(".main-image-container").length).toBe(1);
  });
});
