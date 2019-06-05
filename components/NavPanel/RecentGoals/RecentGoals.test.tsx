import React from "react";
import { shallow } from "enzyme";
import RecentGoals from "./RecentGoals";

describe("RecentGoals", () => {
  it("should render without error", () => {
    const recentGoals = [
      { id: 3, name: "", image: "", child: "", price: 1, progress: "" }
    ];
    const wrapper = shallow(<RecentGoals recentGoals={recentGoals} />);
    expect(wrapper.find(".recent-goals-container").length).toBe(1);
  });
});
