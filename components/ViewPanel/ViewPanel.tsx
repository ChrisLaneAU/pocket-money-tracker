import * as React from "react";
import "./ViewPanel.scss";

import MainImage from "./MainImage/MainImage";
import ActionButton from "./ActionButton/ActionButton";
import Name from "./Name/Name";

interface Props {
  user: UserShape;
  name: string;
}

type UserShape = {
  id: number;
  name: string;
  image: string;
};

const ViewPanel = ({ user, name }: Props) => {
  const renderButtons = () => {
    // TODO: refactor to avoid using variable a
    return Array.from(Array(7), (a, i) => (
      <ActionButton
        key={`btn-${i + 1}-${a}`}
        index={i + 1}
        buttonClass={`action-button-${i + 1}`}
        containerClass={`action-button-container-${i + 1}`}
      />
    ));
  };

  return (
    <section className="view-panel">
      <MainImage user={user} />
      <ul className="view-panel-action-button-list">{renderButtons()}</ul>
      <Name name={name} />
    </section>
  );
};

export default ViewPanel;
