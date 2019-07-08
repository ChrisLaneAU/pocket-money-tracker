import * as React from "react";
import { useState } from "react";
import "./ViewPanel.scss";

import MainImage from "../MainImage/MainImage";
import ActionButton from "../ActionButton/ActionButton";
import Name from "../Name/Name";
import ModalWindow from "../../ModalWindow/ModalWindow";
import Form from "../../Form/Form";

// FORMS
import newGoal from "../forms/newGoal";
import newChild from "../forms/newChild";
import newChore from "../forms/newChore";
const forms = { newGoal, newChild, newChore };

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
  price: number;
  progress: number;
};

const ViewPanel = ({ user, currentPage, currentGoal, buttonsData }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState("newGoal");

  const showForm = (show: boolean, label: string) => {
    if (!label.includes("New")) return;
    const form = label.replace(/ /, "").replace(/N/, "n");
    setActiveForm(form);
    setShowModal(show);
  };

  // const showChores = choresList => {};

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
          showForm={showForm}
          handleButtonClick={showForm}
        />
      );
    }).filter(content => content !== undefined);
  };

  const pageData = currentPage == "dashboard" ? user : currentGoal;
  const { image, name } = pageData;

  const listClasses = `view-panel-action-button-list view-panel-action-button-list-${currentPage}`;

  const modalWindow: React.ReactNode = (
    <ModalWindow showForm={showForm} heading={forms[activeForm].heading}>
      <Form currentPage={currentPage} inputs={forms[activeForm].inputs} />
    </ModalWindow>
  );

  return (
    <section className="view-panel">
      <MainImage image={image} description={name} currentPage={currentPage} />
      <ul className={listClasses}>{renderButtons()}</ul>
      <Name currentPage={currentPage} name={name} />
      {showModal ? modalWindow : <></>}
    </section>
  );
};

export default ViewPanel;
