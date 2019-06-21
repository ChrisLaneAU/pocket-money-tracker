// Goal Tracker
import * as React from "react";
import { withRouter } from "next/router";
import "./goal-tracker.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import ViewPanel from "../../components/ViewPanel/ViewPanel";

interface Props {
  router: any;
  currentGoals: CurrentGoals[];
}

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

export const GoalTracker = ({ router, currentGoals }: Props) => {
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

  const { route, query } = router;

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

GoalTracker.getInitialProps = async () => {
  const query = `
  query {
    goals {
      id,
      name,
      image,
      child,
      price,
      progress
    }
  }
  `;

  const url = "https://pocket-money-tracker-api.herokuapp.com/graphql";

  const options: any = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return {
    currentGoals: data.data.goals
  };
};

export default withRouter(GoalTracker);
