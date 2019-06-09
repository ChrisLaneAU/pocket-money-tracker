import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Input", () => {
  it("should render without error", () => {
    const initialProps = {
      id: "1",
      label: "",
      type: "text",
      placeholder: "",
      autoFocus: true,
      required: false
    };
    const wrapper = shallow(<Input {...initialProps} />);
    expect(wrapper.find(".form-input").length).toBe(1);
  });
});
