import * as React from "react";
import "./User.scss";

interface Props {
  user: User;
}

type User = {
  id: number;
  name: string;
  image: string;
};

const User = ({ user }: Props) => {
  const { id, name, image } = user;
  return (
    <div id={id.toString()} className="user-container">
      <img className="user-image" src={image} alt={name} />
      <div className="user-name">
        <h2 className="user-name-text">{name}</h2>
      </div>
    </div>
  );
};

export default User;
