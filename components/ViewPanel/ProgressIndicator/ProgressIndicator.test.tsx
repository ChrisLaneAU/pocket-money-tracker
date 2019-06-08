import React from "react";
import { shallow } from "enzyme";
import ProgressIndicator from "./ProgressIndicator";

describe("ProgressButton", () => {
  it("should render without error", () => {
    const wrapper = shallow(<ProgressIndicator isEarned={false} />);
    expect(wrapper.find(".progress-indicator").length).toBe(1);
  });
});
