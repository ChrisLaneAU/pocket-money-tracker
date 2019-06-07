// Dashboard
import * as React from "react";
import "./dashboard.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import ViewPanel from "../../components/ViewPanel/ViewPanel";

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

type RecentGoals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: number;
  progress: string;
};

const Dashboard = (
  /*{ name, image, childrenList, recentGoals }: Props*/ props
) => {
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

  const name: string =
    props.url.pathname == "/dashboard" ? user.name : "toy name";

  return (
    <>
      <Layout>
        <NavPanel
          user={user}
          childrenList={childrenList}
          recentGoals={recentGoals}
        />
        <ViewPanel user={user} name={name} />
      </Layout>
    </>
  );
};

export default Dashboard;
