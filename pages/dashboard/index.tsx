// Dashboard
import * as React from "react";
import "./dashboard.scss";

import Layout from "../../components/Layout/Layout";
import NavPanel from "../../components/NavPanel/NavPanel";
import User from "../../components/NavPanel/User/User";
import MyChildren from "../../components/NavPanel/MyChildren/MyChildren";

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
      { id: 2, name: "Jilly", image: "http://fillmurray.com/202/202" }
    ]; // for testing

  return (
    <>
      <Layout>
        <NavPanel>
          <User name={name} image={image} />
          <MyChildren childrenList={childrenList} />
        </NavPanel>
      </Layout>
    </>
  );
};

export default Dashboard;
