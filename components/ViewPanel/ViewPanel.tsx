import * as React from "react";
import "./ViewPanel.scss";

import MainImage from "./MainImage/MainImage";

interface Props {
  user: UserShape;
}

type UserShape = {
  id: number;
  name: string;
  image: string;
};

const ViewPanel = ({ user }: Props) => {
  return (
    <section className="view-panel">
      <MainImage user={user} />
    </section>
  );
};

export default ViewPanel;
