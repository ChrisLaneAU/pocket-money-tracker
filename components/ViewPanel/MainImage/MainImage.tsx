import * as React from "react";
import "./MainImage.scss";

interface Props {
  user: UserShape;
}

type UserShape = {
  id: number;
  name: string;
  image: string;
};

const MainImage = ({ user }: Props) => {
  return (
    <div className="main-image-container">
      <img className="main-image" src={user.image} alt={user.name} />
    </div>
  );
};

export default MainImage;
