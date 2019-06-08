import React from "react";
import { shallow } from "enzyme";
import CurrentGoals from "./CurrentGoals";

describe("CurrentGoals", () => {
  it("should render without error", () => {
    const currentGoals = [
      { id: 3, name: "", image: "", child: "", price: 1, progress: 1 }
    ];
    const wrapper = shallow(<CurrentGoals currentGoals={currentGoals} />);
    expect(wrapper.find(".current-goals-container").length).toBe(1);
  });
});
