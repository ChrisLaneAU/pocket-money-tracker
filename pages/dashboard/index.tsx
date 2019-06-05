// Dashboard
import * as React from "react";
import "./dashboard.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import User from "../../components/NavPanel/User/User";
import MyChildren from "../../components/NavPanel/MyChildren/MyChildren";
import RecentGoals from "../../components/NavPanel/RecentGoals/RecentGoals";

// interface Props {
//   name: string;
//   image: string;
//   [childrenList: string]: ChildrenList[];
// }

type ChildrenList = {
  id: number;
  name: string;
  image: string;
};

const Dashboard = (/*{ name, image, childrenList }: Props*/) => {
  const name = "Chris", // for testing
    image = "http://fillmurray.com/200/200", // for testing
    childrenList: ChildrenList[] = [
      { id: 1, name: "Johnny", image: "http://fillmurray.com/201/201" },
      { id: 2, name: "Jilly", image: "http://fillmurray.com/200/201" }
    ],
    recentGoals = [
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

  return (
    <>
      <Layout>
        <NavPanel>
          <User name={name} image={image} />
          <MyChildren childrenList={childrenList} />
          <RecentGoals recentGoals={recentGoals} />
        </NavPanel>
      </Layout>
    </>
  );
};

export default Dashboard;
