import * as React from "react";
import { useState } from "react";
import "./ViewPanel.scss";

import BackButton from "./BackButton/BackButton";
import MainImage from "./MainImage/MainImage";
import ActionButton from "./ActionButton/ActionButton";
import Name from "./Name/Name";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import ModalWindow from "../ModalWindow/ModalWindow";
import Form from "../Form/Form";

interface Props {
  user: UserShape;
  currentPage: string;
  currentGoal: Goal;
  buttonsData: Data;
}

type Data = {
  buttonsContent: string[] | IconFar;
  buttonsLabel: string[];
  setShowModal: Function;
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
  const [showModal, setShowModal] = useState(false);

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
          setShowModal={setShowModal}
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
          {Object.values(currentGoal).length ? (
            renderProgressIndicators()
          ) : (
            <></>
          )}
        </ul>
      </>
    );

  const backButton: React.ReactNode =
    currentPage == "dashboard" ? <></> : <BackButton />;

  const pageData = currentPage == "dashboard" ? user : currentGoal;
  const { image, name } = pageData;

  const listClasses = `view-panel-action-button-list view-panel-action-button-list-${currentPage}`;

  const addGoal = {
    heading: "Add Goal",
    inputs: [
      {
        id: "search-amazon",
        label: "Search Amazon",
        type: "text",
        placeholder: "Type your search...",
        autoFocus: true,
        required: false
      },
      {
        id: "goal-child",
        label: "Child",
        type: "text",
        placeholder: "Child's name...",
        autoFocus: false,
        required: true
      },
      {
        id: "goal-image",
        label: "Photo",
        type: "text",
        placeholder: "http://your-photo...",
        autoFocus: false,
        required: true
      },
      {
        id: "goal-name",
        label: "Name",
        type: "text",
        placeholder: "Enter the goal name...",
        autoFocus: false,
        required: true
      },
      {
        id: "goal-price",
        label: "Price",
        type: "number",
        placeholder: "Enter the price...",
        autoFocus: false,
        required: true
      }
    ]
  };

  const modalWindow: React.ReactNode =
    currentPage == "dashboard" && showModal ? (
      <ModalWindow setShowModal={setShowModal} heading={addGoal.heading}>
        <Form setShowModal={setShowModal} inputs={addGoal.inputs} />
      </ModalWindow>
    ) : (
      <></>
    );

  return (
    <section className="view-panel">
      {backButton}
      <MainImage image={image} description={name} currentPage={currentPage} />
      <ul className={listClasses}>{renderButtons()}</ul>
      <Name currentPage={currentPage} name={name} />
      {progress}
      {modalWindow}
    </section>
  );
};

export default ViewPanel;
