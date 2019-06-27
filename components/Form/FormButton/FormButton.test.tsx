import React from "react";
import { mount } from "enzyme";
import FormButton from "./FormButton";

//const clickFn = jest.fn();
const wrapper = mount(
  <FormButton currentPage="dashboard" submitForm={() => {}} />
);

describe("FormButton", () => {
  it("should render without error", () => {
    expect(wrapper.find(".form-button").length).toBe(1);
  });
  // it("should open 'New Goal' modal on 'New Goal' button click", () => {
  //   wrapper.find("button.action-button-3").simulate("click");
  //   const heading = wrapper.find(".modal-window-heading");
  //   expect(heading.text()).toBe("New Goal");
  // });
});
