import React from "react";
import { mount } from "enzyme";
import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  const buttonsData = {
    buttonsContent: ["cog", "cog", "cog", "cog", "cog", "cog", "cog"],
    buttonsLabel: [""],
    buttonClasses: "",
    containerClass: ""
  };
  const setShowModal = () => {};

  it("should render on dashboard without error", () => {
    const wrapper = mount(
      <ActionButton
        buttonsData={buttonsData}
        currentPage="dashboard"
        index={1}
        setShowModal={setShowModal}
      />
    );
    expect(wrapper.find(".action-button-icon").length).not.toBe(0);
  });

  it("should render on goal-tracker without error", () => {
    const wrapper = mount(
      <ActionButton
        buttonsData={buttonsData}
        currentPage="goal-tracker"
        index={1}
        setShowModal={setShowModal}
      />
    );
    expect(wrapper.find(".action-button-price").length).not.toBe(0);
  });
});
