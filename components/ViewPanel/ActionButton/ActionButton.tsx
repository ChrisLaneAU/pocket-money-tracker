import * as React from "react";
import "./ActionButton.scss";

import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

const squareLookup: IconLookup = { prefix: "far", iconName: "plus-square" };
const squareIconDefinition: IconDefinition = findIconDefinition(squareLookup);

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  index: number;
  buttonClass: string;
  containerClass: string;
}

const ActionButton = ({ index, buttonClass, containerClass }: Props) => {
  type IconFar = {};

  const icons: string[] | IconFar = [
    "cog",
    "list",
    "plus-square",
    "user-plus",
    squareIconDefinition,
    "tasks",
    "chart-line"
  ];

  const names: string[] = [
    "Settings",
    "Goals List",
    "New Goal",
    "New Child",
    "New Chore",
    "Chores List",
    "Stats"
  ];

  return (
    <li className={`action-button-list-item-${index}`} key={`btn-${index}`}>
      <div className={`${containerClass}`}>
        <button className={`action-button ${buttonClass}`}>
          <FontAwesomeIcon
            className="action-button-icon"
            icon={icons[index - 1]}
          />
        </button>
        <p className="action-button-name">{names[index - 1]}</p>
      </div>
    </li>
  );
};

export default ActionButton;
