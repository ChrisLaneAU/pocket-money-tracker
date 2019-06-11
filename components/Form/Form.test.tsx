import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";

const inputs = [
  {
    id: "search-amazon",
    label: "Search Amazon",
    type: "text",
    placeholder: "Type your search...",
    autoFocus: true,
    required: false
  }
];

const wrapper = shallow(<Form inputs={inputs} />);

describe("Form", () => {
  it("should render without error", () => {
    expect(wrapper.find(".form").length).toBe(1);
  });
});
