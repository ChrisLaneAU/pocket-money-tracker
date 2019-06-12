import * as React from "react";
import "./Layout.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faCog,
  faList,
  faPlusSquare,
  faUserPlus,
  faTasks,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

library.add(far, faCog, faList, faPlusSquare, faUserPlus, faTasks, faChartLine);

interface Props {
  children: React.ReactNode;
  // className?: string;
  // user: {
  //   id: number;
  //   name: string;
  //   isAdmin: boolean;
  //   image: string;
  // };
}

// const user = {
//   id: 1,
//   name: "Chris",
//   //email: "",
//   isAdmin: true,
//   image: "http://fillmurray.com/200/200"
// };

const Layout = (props: Props) => {
  return (
    <section className="section-layout">
      <div className="section-layout-bg" />
      <div className="section-layout-container">{props.children}</div>
    </section>
  );
};

export default Layout;
