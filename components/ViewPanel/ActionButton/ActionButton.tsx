import * as React from "react";
import "./ActionButton.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  index: number;
  buttonsData: Data;
  currentPage: string;
}

type Data = {
  buttonsContent: string[] | IconFar;
  buttonsLabel: string[];
  buttonClass: string;
  containerClass: string;
};

type IconFar = {};

// TODO: move buttonData into dashboard and goal-tracking components
// TODO: refactor CSS to handle different actionButton placements
// buttonData: {buttonClass, containerClass, currentPage, buttonsContent, buttonsText}

const ActionButton = ({ index, currentPage, buttonsData }: Props) => {
  const {
    buttonsContent,
    buttonsLabel,
    buttonClass,
    containerClass
  } = buttonsData;

  // TODO: define type for FontAwesomeIcon | <p>
  const content: any =
    currentPage == "dashboard" ? (
      <FontAwesomeIcon
        className="action-button-icon"
        icon={buttonsContent[index - 1]}
      />
    ) : (
      <p className="action-button-price">{`$${buttonsContent[index - 1]}`}</p>
    );

  return (
    <li
      className={`action-button-list-item-${currentPage}-${index}`}
      key={`btn-${index}`}
    >
      <div className={`${containerClass}`}>
        <button className={`action-button ${buttonClass}`}>{content}</button>
        <p className="action-button-label">{buttonsLabel[index - 1]}</p>
      </div>
    </li>
  );
};

export default ActionButton;
