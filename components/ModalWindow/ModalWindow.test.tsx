import React from "react";
import { shallow } from "enzyme";
import ModalWindow from "./ModalWindow";

describe("ModalWindow", () => {
  const props = { heading: "", showForm: () => {}, children: <></> };
  it("should render without error", () => {
    const wrapper = shallow(<ModalWindow {...props} />);
    expect(wrapper.find(".modal-window").length).toBe(1);
  });
});
