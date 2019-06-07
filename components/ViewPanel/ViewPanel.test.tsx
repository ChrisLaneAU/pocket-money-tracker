import React from "react";
import { shallow } from "enzyme";
import ViewPanel from "./ViewPanel";

describe("ViewPanel", () => {
  it("should render without error", () => {
    const user = { id: 1, name: "", image: "" };
    const wrapper = shallow(<ViewPanel user={user} />);
    expect(wrapper.find(".view-panel").length).toBe(1);
  });
});
