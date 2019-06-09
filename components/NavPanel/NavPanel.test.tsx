import React from "react";
import { shallow } from "enzyme";
import NavPanel from "./NavPanel";

describe("NavPanel", () => {
  const user = {
      id: 1,
      name: "Chris",
      image: "http://fillmurray.com/200/200"
    },
    childrenList = [
      { id: 1, name: "Johnny", image: "http://fillmurray.com/201/201" },
      { id: 2, name: "Jilly", image: "http://fillmurray.com/200/201" }
    ],
    currentGoals = [
      {
        id: 3,
        name: "Paw Patrol Tower",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/711c-ix79wL._SX425_.jpg",
        child: "Johnny",
        price: "40",
        progress: "30"
      },
      {
        id: 4,
        name: "Dolls House",
        image:
          "https://www.julie-anns-dolls-houses.co.uk/ekmps/shops/julieannsdoll/images/newham-manor-dolls-house-various-colours-1703-p.jpg",
        child: "Jilly",
        price: "78",
        progress: "78"
      }
    ];
  it("should render without error", () => {
    const wrapper = shallow(
      <NavPanel
        user={user}
        childrenList={childrenList}
        currentGoals={currentGoals}
      />
    );
    expect(wrapper.find(".nav-panel").length).toBe(1);
  });
});
