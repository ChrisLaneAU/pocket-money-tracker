import React from "react";
import { shallow } from "enzyme";
import { Form } from "./Form";

const inputs = [
  {
    id: "search-amazon",
    label: "Search Amazon",
    type: "text",
    placeholder: "Type your search...",
    autoFocus: true,
    required: false,
    val: "",
    onInputChange: () => {}
  }
];

const router = { route: "/dashboard" };

describe("Form", () => {
  const wrapper = shallow(
    <Form handleButtonClick={() => {}} inputs={inputs} router={router} />
  );
  it("should render without error", () => {
    expect(wrapper.find(".form").length).toBe(1);
  });
});
