import * as React from "react";
import "./NavPanel.scss";

import User from "./User/User";
import MyChildren from "./MyChildren/MyChildren";
import RecentGoals from "./RecentGoals/RecentGoals";

interface Props {
  user: UserShape;
  childrenList: ChildrenList[];
  recentGoals: RecentGoals[];
}

type UserShape = {
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

const NavPanel = ({ user, childrenList, recentGoals }: Props) => {
  return (
    <section className="nav-panel">
      <User user={user} />
      <MyChildren childrenList={childrenList} />
      <RecentGoals recentGoals={recentGoals} />
    </section>
  );
};

export default NavPanel;
