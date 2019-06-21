import * as React from "react";
import Link from "next/link";
import "./CurrentGoals.scss";

type Goals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: string;
  progress: string;
};

interface Props {
  currentGoals: Goals[];
}

const CurrentGoals = ({ currentGoals }: Props) => {
  const renderGoals = () => {
    return currentGoals.map(goal => {
      const { id, name, image, child, price, progress } = goal;
      const progressColour =
        progress == price ? "current-goals-list-item-progress-completed" : "";
      return (
        <li className="current-goals-list-item" key={id}>
          <Link
            as={`/goal-tracker/${name.toLowerCase().replace(/ /g, "-")}`}
            href={{
              pathname: "/goal-tracker",
              query: { id, name, image, child, price, progress }
            }}
          >
            <a className="current-goals-list-item-link">
              <div className="current-goals-list-item-image-container">
                <img
                  className="current-goals-list-item-image"
                  src={image}
                  alt={name}
                />
              </div>
              <div
                className={`current-goals-list-item-progress ${progressColour}`}
              >
                &nbsp;
              </div>
              <div className="current-goals-list-item-details">
                <p>{name}</p>
                <p className="current-goals-list-item-child">{child}</p>
                <p className="current-goals-list-item-price">
                  ${progress} / ${price}
                </p>
              </div>
            </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <div className="current-goals-container">
      <h2 className="current-goals-heading">Current Goals</h2>
      <ul className="current-goals-list">
        {currentGoals.length ? renderGoals() : <></>}
      </ul>
    </div>
  );
};

export default CurrentGoals;
