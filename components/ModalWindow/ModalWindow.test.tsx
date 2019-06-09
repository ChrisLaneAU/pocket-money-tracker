import React from "react";
import { shallow } from "enzyme";
import ModalWindow from "./ModalWindow";

describe("ModalWindow", () => {
  it("should render without error", () => {
    const wrapper = shallow(<ModalWindow />);
    expect(wrapper.find(".modal-window").length).toBe(1);
  });
});
