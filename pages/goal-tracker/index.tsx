// Goal Tracker
import * as React from "react";
import { withRouter } from "next/router";
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

type CurrentGoals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: string;
  progress: string;
};

export const GoalTracker = props => {
  const user: User = {
      id: 1,
      name: "Chris",
      image: "https://chrislane.com.au/img/chris.jpg"
    }, // for testing
    childrenList: ChildrenList[] = [
      {
        id: 1,
        name: "Johnny",
        image:
          "https://st4.depositphotos.com/12053038/20451/i/1600/depositphotos_204513542-stock-photo-happy-kid-standing-in-grass.jpg"
      },
      {
        id: 2,
        name: "Jilly",
        image:
          "https://d.newsweek.com/en/full/1062409/children-toys-siblings-kids-stock.jpg"
      }
    ],
    currentGoals: CurrentGoals[] = [
      {
        id: 3,
        name: "Paw Patrol Tower",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/711c-ix79wL._SX425_.jpg",
        child: "Johnny",
        price: "40",
        progress: "30"
      },
      {
        id: 4,
        name: "Dolls House",
        image:
          "https://www.julie-anns-dolls-houses.co.uk/ekmps/shops/julieannsdoll/images/newham-manor-dolls-house-various-colours-1703-p.jpg",
        child: "Jilly",
        price: "78",
        progress: "78"
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

  const { route, query } = props.router;

  return (
    <div className="goal-tracker">
      <Layout>
        <NavPanel
          user={user}
          childrenList={childrenList}
          currentGoals={currentGoals}
          currentPage={route
            .slice(1, route.length)
            .replace(/-/, " ")
            .replace(/g/, "G")
            .replace(/t/, "T")}
        />
        <ViewPanel
          user={user}
          currentPage={route.slice(1, route.length)}
          currentGoal={query}
          buttonsData={buttonsData}
        />
      </Layout>
    </div>
  );
};

export default withRouter(GoalTracker);
