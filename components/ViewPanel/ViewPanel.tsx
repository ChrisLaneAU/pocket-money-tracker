import * as React from "react";
import "./ViewPanel.scss";

import BackButton from "./BackButton/BackButton";
import MainImage from "./MainImage/MainImage";
import ActionButton from "./ActionButton/ActionButton";
import Name from "./Name/Name";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";

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
  price: string;
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
          key={`btn-${i + 1}-${a}`}
          index={i + 1}
          currentPage={currentPage}
          buttonsData={{ ...buttonsData, buttonClasses, containerClass }}
        />
      );
    }).filter(content => content !== undefined);
  };

  const renderProgressIndicators = () => {
    const { price, progress } = currentGoal;

    return Array.from(Array(Number(price)), (val, index) => {
      return (
        <ProgressIndicator
          key={`progress-${index}-${val}`}
          isEarned={index < Number(progress)}
        />
      );
    });
  };

  const progress: React.ReactNode =
    currentPage == "dashboard" ? (
      <></>
    ) : (
      <>
        <h2 className="view-panel-progress-heading">{`$${
          currentGoal.progress
        } / $${currentGoal.price}`}</h2>
        <ul className="view-panel-progress-list">
          {renderProgressIndicators()}
        </ul>
      </>
    );

  const backButton: React.ReactNode =
    currentPage == "dashboard" ? <></> : <BackButton />;

  const pageData = currentPage == "dashboard" ? user : currentGoal;
  const { image, name } = pageData;

  const listClasses = `view-panel-action-button-list view-panel-action-button-list-${currentPage}`;

  return (
    <section className="view-panel">
      {backButton}
      <MainImage image={image} description={name} currentPage={currentPage} />
      <ul className={listClasses}>{renderButtons()}</ul>
      <Name currentPage={currentPage} name={name} />
      {progress}
    </section>
  );
};

export default ViewPanel;
