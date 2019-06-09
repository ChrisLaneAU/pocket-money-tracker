import * as React from "react";
import "./ActionButton.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  index: number;
  buttonsData: Data;
  currentPage: string;
  setShowModal: Function;
}

type Data = {
  buttonsContent: string[] | IconFar;
  buttonsLabel: string[];
  buttonClasses: string;
  containerClass: string;
};

type IconFar = {};

const ActionButton = ({
  index,
  currentPage,
  buttonsData,
  setShowModal
}: Props) => {
  const {
    buttonsContent,
    buttonsLabel,
    buttonClasses,
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
        <button
          onClick={() => void setShowModal(true)}
          className={`action-button ${buttonClasses}`}
        >
          {content}
        </button>
        <p className={`action-button-label action-button-label-${currentPage}`}>
          {buttonsLabel[index - 1]}
        </p>
      </div>
    </li>
  );
};

export default ActionButton;
