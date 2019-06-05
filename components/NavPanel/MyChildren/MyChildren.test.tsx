import React from "react";
import { shallow } from "enzyme";
import MyChildren from "./MyChildren";

const props = [{ id: 1, name: "", image: "" }];

describe("MyChildren", () => {
  it("should render without error", () => {
    const wrapper = shallow(<MyChildren childrenList={props} />);
    expect(wrapper.find(".my-children-container").length).toBe(1);
  });
});
