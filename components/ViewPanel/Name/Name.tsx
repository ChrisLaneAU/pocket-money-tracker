import * as React from "react";
import "./Name.scss";

interface Props {
  name: string;
}

const Name = ({ name }: Props) => {
  return <h2 className="name">{name}</h2>;
};

export default Name;
