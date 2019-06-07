import * as React from "react";
import "./MainImage.scss";

interface Props {
  image: string;
  description: string;
  currentPage: string;
}

const MainImage = ({ image, description, currentPage }: Props) => {
  return (
    <div className={`main-image-container-${currentPage}`}>
      <img className="main-image" src={image} alt={description} />
    </div>
  );
};

export default MainImage;
