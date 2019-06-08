import * as React from "react";
import "./ViewPanel.scss";

import MainImage from "./MainImage/MainImage";
import ActionButton from "./ActionButton/ActionButton";
import Name from "./Name/Name";

interface Props {
  user: UserShape;
  currentPage: string;
  currentGoal: Goal;
  buttonsData: Data;
}

type Data = {
  buttonsContent: string[] | IconFar;
  buttonsLabel: string[];
};

type IconFar = {};

type UserShape = {
  id: number;
  name: string;
  image: string;
};

type Goal = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: number;
  progress: string;
};

const ViewPanel = ({ user, currentPage, currentGoal, buttonsData }: Props) => {
  const renderButtons = () => {
    // TODO: refactor to avoid using variable a
    return Array.from(Array(7), (a, i) => {
      const buttonClasses = `action-button-${i +
        1} action-button-${currentPage}`;
      const containerClass = `action-button-container-${currentPage}-${i + 1}`;
      return buttonsData.buttonsContent[i] == undefined ? (
        undefined
      ) : (
        <ActionButton
          key={`btn-${i + 1}`}
          index={i + 1}
          currentPage={currentPage}
          buttonsData={{ ...buttonsData, buttonClasses, containerClass }}
        />
      );
    }).filter(content => content !== undefined);
  };

  const pageData = currentPage == "dashboard" ? user : currentGoal;
  const { image, name } = pageData;

  return (
    <section className="view-panel">
      <MainImage image={image} description={name} currentPage={currentPage} />
      <ul
        className={`view-panel-action-button-list view-panel-action-button-list-${currentPage}`}
      >
        {renderButtons()}
      </ul>
      <Name currentPage={currentPage} name={name} />
    </section>
  );
};

export default ViewPanel;
