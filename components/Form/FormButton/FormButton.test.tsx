import React from "react";
import { mount } from "enzyme";
import FormButton from "./FormButton";

const clickFn = jest.fn();
const wrapper = mount(<FormButton submitForm={() => {}} />);

describe("FormButton", () => {
  it("should render without error", () => {
    expect(wrapper.find(".form-button").length).toBe(1);
  });
  it("should run a function on button click", () => {
    wrapper.find("button").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
