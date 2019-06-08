import * as React from "react";
import "./ProgressIndicator.scss";

interface Props {
  isEarned: boolean;
}

const ProgressButton = ({ isEarned }: Props) => {
  const earned = isEarned ? " progress-indicator-earned" : "";
  return <li className={`progress-indicator${earned}`}>&nbsp;</li>;
};

export default ProgressButton;
