import React from "react";
import { shallow } from "enzyme";
import ViewPanel from "./ViewPanel";

describe("ViewPanel", () => {
  it("should render without error", () => {
    const user = { id: 1, name: "", image: "" };
    const wrapper = shallow(
      <ViewPanel
        user={user}
        currentGoal={{
          id: 1,
          name: "",
          image: "",
          price: "1",
          child: "",
          progress: "1"
        }}
        currentPage=""
        buttonsData={{ buttonsContent: [""], buttonsLabel: [""] }}
      />
    );
    expect(wrapper.find(".view-panel").length).toBe(1);
  });
});
