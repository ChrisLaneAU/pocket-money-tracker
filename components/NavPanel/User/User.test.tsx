import React from "react";
import { shallow } from "enzyme";
import User from "./User";

const user = {
  name: "",
  image: ""
};

describe("User", () => {
  it("should render without error", () => {
    const wrapper = shallow(<User name={user.name} image={user.image} />);
    expect(wrapper.find("div").length).toBe(1);
  });
});
