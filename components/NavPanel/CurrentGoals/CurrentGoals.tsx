import * as React from "react";
import "./CurrentGoals.scss";

type goals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: number;
  progress: number;
};

interface Props {
  [currentGoals: string]: goals[];
}

const CurrentGoals = ({ currentGoals }: Props) => {
  const renderGoals = () => {
    return currentGoals.map(goal => {
      const { id, name, image, child, price, progress } = goal;
      const progressColour =
        progress == price ? "current-goals-list-item-progress-completed" : "";
      return (
        <li className="current-goals-list-item" key={id}>
          <img
            className="current-goals-list-item-image"
            src={image}
            alt={name}
          />
          <div className={`current-goals-list-item-progress ${progressColour}`}>
            &nbsp;
          </div>
          <div className="current-goals-list-item-details">
            <p>{name}</p>
            <p className="current-goals-list-item-child">{child}</p>
            <p className="current-goals-list-item-price">${price}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="current-goals-container">
      <h2 className="current-goals-heading">Current Goals</h2>
      <ul className="current-goals-list">{renderGoals()}</ul>
    </div>
  );
};

export default CurrentGoals;
