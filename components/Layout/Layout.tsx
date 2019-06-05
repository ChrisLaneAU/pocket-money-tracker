import * as React from "react";
import "./Layout.scss";

interface Props {
  children: any;
  className?: string;
  // user?: {
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
    <main className="main-layout">
      <div className="main-layout-bg" />
      <div className="main-layout-container">{props.children}</div>
    </main>
  );
};

export default Layout;
