import * as React from "react";
import "./Name.scss";

interface Props {
  name: string;
  currentPage: string;
}

const Name = ({ name, currentPage }: Props) => {
  return <h2 className={`name name-${currentPage}`}>{name}</h2>;
};

export default Name;
