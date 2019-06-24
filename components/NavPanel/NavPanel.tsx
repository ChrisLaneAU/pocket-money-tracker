import * as React from "react";
import "./NavPanel.scss";

import User from "./User/User";
import MyChildren from "./MyChildren/MyChildren";
import CurrentGoals from "./CurrentGoals/CurrentGoals";

interface Props {
  user: UserShape;
  childrenList: ChildrenList[];
  currentGoals: Goals[];
  currentPage: string;
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
  price: number;
  progress: number;
};

const NavPanel = ({ user, childrenList, currentGoals, currentPage }: Props) => {
  return (
    <section className="nav-panel">
      <User user={user} currentPage={currentPage} />
      <MyChildren childrenList={childrenList} />
      <CurrentGoals currentGoals={currentGoals} />
    </section>
  );
};

export default NavPanel;
