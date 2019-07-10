import * as React from "react";
import { useState } from "react";
import "./ViewPanelGoalTracker.scss";

import BackButton from "../BackButton/BackButton";
import MainImage from "../MainImage/MainImage";
import ActionButton from "../ActionButton/ActionButton";
import Name from "../Name/Name";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
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

const ViewPanelGoalTracker = ({
  user,
  currentPage,
  currentGoal,
  buttonsData
}: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState("newGoal");
  const [progressVal, setProgressVal] = useState(currentGoal.progress);

  const showForm = (show: boolean, label: string) => {
    if (!label.includes("New")) return;
    const form = label.replace(/ /, "").replace(/N/, "n");
    setActiveForm(form);
    setShowModal(show);
  };

  // const showChores = choresList => {};

  const updateProgress = async choreValue => {
    const { id, name, image, child, price, progress } = currentGoal;
    const newProgress = Number(progress) + Number(choreValue);

    setProgressVal(newProgress);

    const query = `
    mutation {
       updateGoal(id:"${id}", name: "${name}", image: "${image}", child: "${child}", price: "${price}", progress: "${newProgress}") {
          id,
          name,
          image,
          child,
          price,
          progress
      }
    }
    `;

    // const url = "http://localhost:3001/graphql";
    const url = "https://pocket-money-tracker-api.herokuapp.com/graphql";

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };

    const res = await fetch(url, options);
    const resJson = await res.json();

    return {
      currentGoal: resJson.data.goal
    };
  };

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
          handleButtonClick={updateProgress}
        />
      );
    }).filter(content => content !== undefined);
  };

  const renderProgressIndicators = () => {
    const { price } = currentGoal;

    // TODO: remove Number() if price and progressVal are integers
    return Array.from(Array(Number(price)), (val, index) => {
      return (
        <ProgressIndicator
          key={`progress-${index}-${val}`}
          isEarned={index < Number(progressVal)}
        />
      );
    });
  };

  const progress: React.ReactNode = (
    <>
      <h2 className="view-panel-progress-heading">
        <span className="view-panel-progress-heading-span">Progress:</span>
        {` $${progressVal} / $${currentGoal.price}`}
      </h2>
      <ul className="view-panel-progress-list">
        {Object.values(currentGoal).length ? renderProgressIndicators() : <></>}
      </ul>
    </>
  );

  const { image, name } = currentGoal;

  const listClasses = `view-panel-action-button-list view-panel-action-button-list-${currentPage}`;

  const modalWindow: React.ReactNode = (
    <ModalWindow showForm={showForm} heading={forms[activeForm].heading}>
      <Form currentPage={currentPage} inputs={forms[activeForm].inputs} />
    </ModalWindow>
  );

  return (
    <>
      <BackButton />
      <MainImage image={image} description={name} currentPage={currentPage} />
      <ul className={listClasses}>{renderButtons()}</ul>
      <Name currentPage={currentPage} name={name} />
      {progress}
      {showModal ? modalWindow : <></>}
    </>
  );
};

export default ViewPanelGoalTracker;
