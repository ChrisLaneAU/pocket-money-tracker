import React from "react";
import { shallow } from "enzyme";
import User from "./User";

const user = {
  id: 1,
  name: "",
  image: ""
};

describe("User", () => {
  it("should render without error", () => {
    const wrapper = shallow(<User user={user} />);
    expect(wrapper.find(".user-container").length).toBe(1);
  });
});
