import React from "react";
import { shallow } from "enzyme";
import FormButton from "./FormButton";

describe("Form", () => {
  it("should render without error", () => {
    const wrapper = shallow(<FormButton />);
    expect(wrapper.find(".form-button").length).toBe(1);
  });
});
