import * as React from "react";
import "./NavPanel.scss";

import User from "./User/User";
import MyChildren from "./MyChildren/MyChildren";
import CurrentGoals from "./CurrentGoals/CurrentGoals";

interface Props {
  user: UserShape;
  childrenList: ChildrenList[];
  currentGoals: Goals[];
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

type Goals = {
  id: number;
  name: string;
  image: string;
  child: string;
  price: string;
  progress: string;
};

const NavPanel = ({ user, childrenList, currentGoals }: Props) => {
  return (
    <section className="nav-panel">
      <User user={user} />
      <MyChildren childrenList={childrenList} />
      <CurrentGoals currentGoals={currentGoals} />
    </section>
  );
};

export default NavPanel;
