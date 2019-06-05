import * as React from "react";
import "./NavPanel.scss";

interface Props {
  children?: any;
}

const NavPanel = (props: Props) => {
  return <section className="nav-panel">{props.children}</section>;
};

export default NavPanel;
