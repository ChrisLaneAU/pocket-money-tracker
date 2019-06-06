import * as React from "react";
import "./ActionButton.scss";

interface Props {
  index: string;
  className: string;
}

const ActionButton = ({ index, className }: Props) => {
  return (
    <li className={`action-button-list-item-${index}`} key={`btn-${index}`}>
      <button className={`action-button ${className}`}>{className}</button>
    </li>
  );
};

export default ActionButton;
