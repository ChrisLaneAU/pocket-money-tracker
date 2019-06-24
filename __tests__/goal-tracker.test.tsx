import React from "react";
import { mount } from "enzyme";
import { GoalTracker } from "../pages/goal-tracker/index";

describe("goal-tracker", () => {
  const query = {
    id: 3,
    name: "Paw Patrol Tower",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/711c-ix79wL._SX425_.jpg",
    child: "Johnny",
    price: 40,
    progress: 30
  };
  const wrapper = mount(<GoalTracker router={{ route: "", query }} />);
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
