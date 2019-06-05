import * as React from "react";
import "./MyChildren.scss";

type ChildrenList = {
  id: number;
  name: string;
  image: string;
};

interface Props {
  [childrenList: string]: ChildrenList[];
}

const MyChildren = ({ childrenList }: Props) => {
  // const childrenList = [
  //   { id: 1, name: "Johnny", image: "http://fillmurray.com/201/201" }
  // ];
  const renderMyChildren = () => {
    return childrenList.map(child => {
      return (
        <li className="my-children-list-item" key={child.id}>
          <img
            src={child.image}
            alt={child.name}
            className="my-children-list-item-image"
          />
          <p className="my-children-list-item-name">{child.name}</p>
        </li>
      );
    });
  };

  return (
    <div className="my-children-container">
      <h2 className="my-children-heading">My Children</h2>
      <ul className="my-children-list">{renderMyChildren()}</ul>
    </div>
  );
};

export default MyChildren;
