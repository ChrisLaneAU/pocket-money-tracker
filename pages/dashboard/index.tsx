// Dashboard
import * as React from "react";
import "./dashboard.scss";

import Layout from "../../components/Layout/Layout";
import User from "../../components/NavPanel/User/User";

// interface Props {
//   name: string;
//   image: string;
// }

const Dashboard = (/*{name, image}: Props*/) => {
  const name = "Chris", // for testing
    image = "http://fillmurray.com/200/200"; // for testing
  return (
    <>
      <Layout>
        <User name={name} image={image} />
        <h1>Dashboard</h1>
      </Layout>
    </>
  );
};

export default Dashboard;
