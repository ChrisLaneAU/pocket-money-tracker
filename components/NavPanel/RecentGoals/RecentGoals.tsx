import * as React from "react";
import "./RecentGoals.scss";

type goals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: number;
  progress: string;
};

interface Props {
  [recentGoals: string]: goals[];
}

const RecentGoals = ({ recentGoals }: Props) => {
  const renderGoals = () => {
    return recentGoals.map(goal => {
      const { id, name, image, child, price, progress } = goal;
      const progressColour =
        progress == "completed"
          ? "recent-goals-list-item-progress-completed"
          : "";
      return (
        <li className="recent-goals-list-item" key={id}>
          <img
            className="recent-goals-list-item-image"
            src={image}
            alt={name}
          />
          <div className={`recent-goals-list-item-progress ${progressColour}`}>
            &nbsp;
          </div>
          <div className="recent-goals-list-item-details">
            <p>{name}</p>
            <p className="recent-goals-list-item-child">{child}</p>
            <p className="recent-goals-list-item-price">${price}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="recent-goals-container">
      <h2 className="recent-goals-heading">Current Goals</h2>
      <ul className="recent-goals-list">{renderGoals()}</ul>
    </div>
  );
};

export default RecentGoals;
