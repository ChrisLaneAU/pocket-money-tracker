import * as React from "react";
import "./BackButton.scss";
import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/dashboard">
      <div className="back-button">
        <a className="back-button-icon">&#8249;</a>
      </div>
    </Link>
  );
};

export default BackButton;
