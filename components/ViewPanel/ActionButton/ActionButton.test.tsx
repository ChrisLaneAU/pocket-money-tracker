import React from "react";
import { shallow } from "enzyme";
import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  it("should render without error", () => {
    const wrapper = shallow(
      <ActionButton buttonClass="" containerClass="" index={1} />
    );
    expect(wrapper.find(".action-button").length).toBe(1);
  });
});
