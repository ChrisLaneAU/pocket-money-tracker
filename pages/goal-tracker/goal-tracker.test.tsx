import React from "react";
import { mount } from "enzyme";
import GoalTracker from "./index";

describe("goal-tracker", () => {
  const wrapper = mount(<GoalTracker url={{ pathname: "" }} />);
  it("should render <GoalTracker /> without error", () => {
    expect(wrapper.find(".goal-tracker").length).toBe(1);
  });
  it("should render the Layout component", () => {
    expect(wrapper.find(".section-layout").length).toBe(1);
  });
  it("should render the NavPanel component", () => {
    expect(wrapper.find(".nav-panel").length).toBe(1);
  });
});
