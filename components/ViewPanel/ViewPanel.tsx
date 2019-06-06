import * as React from "react";
import "./ViewPanel.scss";

import MainImage from "./MainImage/MainImage";
import ActionButton from "./ActionButton/ActionButton";

interface Props {
  user: UserShape;
}

type UserShape = {
  id: number;
  name: string;
  image: string;
};

const ViewPanel = ({ user }: Props) => {
  const renderButtons = () => {
    return Array.from(Array(7), (a, i) => (
      <ActionButton
        key={`btn-${i + 1}-${a}`}
        index={`${i + 1}`}
        className={`action-button-${i + 1}`}
      />
    ));
  };

  return (
    <section className="view-panel">
      <MainImage user={user} />
      <ul className="view-panel-action-button-list">{renderButtons()}</ul>
    </section>
  );
};

export default ViewPanel;
