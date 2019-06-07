import * as React from "react";
import "./ActionButton.scss";

interface Props {
  index: string;
  buttonClass: string;
  containerClass: string;
}

const ActionButton = ({ index, buttonClass, containerClass }: Props) => {
  return (
    <li className={`action-button-list-item-${index}`} key={`btn-${index}`}>
      <div className={`${containerClass}`}>
        <button className={`action-button ${buttonClass}`}>
          {buttonClass}
        </button>
        <p className="action-button-list-item-name">longerst</p>
      </div>
    </li>
  );
};

export default ActionButton;
