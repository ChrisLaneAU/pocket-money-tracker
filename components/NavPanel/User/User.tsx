import * as React from "react";
import "./User.scss";

interface Props {
  //user: {
  //id: number;
  name: string;
  //isAdmin: boolean;
  image: string;
  //};
}

const User = ({ name, image }: Props) => {
  //const { name, image } = props.user;
  return (
    <div className="user-container">
      <img className="user-image" src={image} alt={name} />
      <div className="user-name">
        <h2 className="user-name-text">{name}</h2>
      </div>
    </div>
  );
};

export default User;
