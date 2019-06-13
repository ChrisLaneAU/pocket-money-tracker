import React from "react";
import { shallow, mount } from "enzyme";
import ViewPanel from "./ViewPanel";

describe("ViewPanel", () => {
  const currentGoal = {
    id: 1,
    name: "",
    image: "",
    price: "1",
    child: "",
    progress: "1"
  };
  const user = { id: 1, name: "", image: "" };
  const setShowModal = jest.fn();

  it("should render without error", () => {
    const wrapper = shallow(
      <ViewPanel
        user={user}
        currentGoal={currentGoal}
        currentPage=""
        buttonsData={{ buttonsContent: [""], buttonsLabel: [""], setShowModal }}
      />
    );
    expect(wrapper.find(".view-panel").length).toBe(1);
  });

  it("should render ModalWindow on ActionButton click", () => {
    const wrapper = mount(
      <ViewPanel
        user={user}
        currentGoal={currentGoal}
        currentPage="dashboard"
        buttonsData={{ buttonsContent: [""], buttonsLabel: [""], setShowModal }}
      />
    );
    wrapper.find(".action-button-3").simulate("click");
    expect(showModal).toBe(false);
    expect(wrapper.find(".modal-window").length).toBe(1);
  });
});
