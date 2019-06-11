// Dashboard
import * as React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import "./dashboard.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import ViewPanel from "../../components/ViewPanel/ViewPanel";

import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from "@fortawesome/fontawesome-svg-core";

const squareLookup: IconLookup = { prefix: "far", iconName: "plus-square" };
const squareIconDefinition: IconDefinition = findIconDefinition(squareLookup);

type IconFar = {};

// interface Props {
//   name: string;
//   image: string;
//   childrenList: ChildrenList[];
//   recentGoals: RecentGoals[];
// }

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

// type Goals = {
//   id: number;
//   name: string;
//   image: string;
//   child: string;
//   price: string;
//   progress: string;
// };

export const Dashboard = (
  /*{ name, image, childrenList, recentGoals }: Props*/ props
) => {
  const [currentGoals, setCurrentGoals] = useState([]);

  useEffect(() => {
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

    // const url = "http://localhost:3001/graphql";
    const url = "https://pocket-money-tracker-api.herokuapp.com/graphql";

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => setCurrentGoals(data.data.goals))
      .catch(console.error);
  }, []);

  const user: User = {
      id: 1,
      name: "Chris",
      image: "http://fillmurray.com/200/200"
    }, // for testing
    childrenList: ChildrenList[] = [
      { id: 1, name: "Johnny", image: "http://fillmurray.com/201/201" },
      { id: 2, name: "Jilly", image: "http://fillmurray.com/200/201" }
    ];

  const buttonsContent: string[] | IconFar = [
    "cog",
    "list",
    "plus-square",
    "user-plus",
    squareIconDefinition,
    "tasks",
    "chart-line"
  ];

  const buttonsLabel: string[] = [
    "Settings",
    "Goals List",
    "New Goal",
    "New Child",
    "New Chore",
    "Chores List",
    "Stats"
  ];

  const buttonsData: any = {
    buttonsContent,
    buttonsLabel
  };

  const { route } = props.router;

  return (
    <>
      <Layout>
        <NavPanel
          user={user}
          childrenList={childrenList}
          currentGoals={currentGoals}
        />
        <ViewPanel
          user={user}
          currentPage={route.slice(1, route.length)}
          currentGoal={currentGoals[0]}
          buttonsData={buttonsData}
        />
      </Layout>
    </>
  );
};

export default withRouter(Dashboard);
