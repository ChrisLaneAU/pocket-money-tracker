// Goal Tracker
import * as React from "react";
import "./goal-tracker.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import ViewPanel from "../../components/ViewPanel/ViewPanel";

type User = {
  id: number;
  name: string;
  image: string;
};

type ChildrenList = {
  id: number;
  name: string;
  image: string;
};

type RecentGoals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: number;
  progress: string;
};

const GoalTracker = props => {
  const user: User = {
      id: 1,
      name: "Chris",
      image: "http://fillmurray.com/200/200"
    }, // for testing
    childrenList: ChildrenList[] = [
      { id: 1, name: "Johnny", image: "http://fillmurray.com/201/201" },
      { id: 2, name: "Jilly", image: "http://fillmurray.com/200/201" }
    ],
    recentGoals: RecentGoals[] = [
      {
        id: 3,
        name: "Paw Patrol Tower",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/711c-ix79wL._SX425_.jpg",
        child: "Johnny",
        price: 40,
        progress: "started"
      },
      {
        id: 4,
        name: "Dolls House",
        image:
          "https://www.julie-anns-dolls-houses.co.uk/ekmps/shops/julieannsdoll/images/newham-manor-dolls-house-various-colours-1703-p.jpg",
        child: "Jilly",
        price: 78,
        progress: "completed"
      }
    ]; // for testing

  const buttonsContent: string[] = ["3", "4", "1", "4", "2"];
  const buttonsLabel: string[] = [
    "Sweep",
    "Clean Car",
    "Make Bed",
    "Wash Car",
    "Blow Leaves"
  ];

  const buttonsData: any = {
    buttonsContent,
    buttonsLabel
  };

  const { pathname } = props.url;

  return (
    <div className="goal-tracker">
      <Layout>
        <NavPanel
          user={user}
          childrenList={childrenList}
          recentGoals={recentGoals}
        />
        <ViewPanel
          user={user}
          currentPage={pathname.slice(1, pathname.length)}
          currentGoal={recentGoals[0]}
          buttonsData={buttonsData}
        />
      </Layout>
    </div>
  );
};

export default GoalTracker;
