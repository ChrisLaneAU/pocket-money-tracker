import React from "react";
import { shallow } from "enzyme";
import { Dashboard } from "../pages/dashboard/index";

describe("dashboard", () => {
  const wrapper = shallow(
    <Dashboard currentGoals={[{ id: "" }]} router={{ route: "/dashboard" }} />
  );
  it("should render <Dashboard /> without error", () => {
    expect(wrapper.find("div").length).toBe(1);
  });
  // it("should render the Layout component", () => {
  //   expect(wrapper.find(".section-layout").length).toBe(1);
  // });
  // it("should render the NavPanel component", () => {
  //   expect(wrapper.find(".nav-panel").length).toBe(1);
  // });
});
