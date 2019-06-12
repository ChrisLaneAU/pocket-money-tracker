// Index
import * as React from "react";
import Link from "next/link";
import "./index.scss";

import Form from "../../components/Form/Form";

const Index = () => {
  const loginInputs = {
    heading: "Login",
    inputs: [
      {
        id: "login-username",
        label: "Username",
        type: "email",
        placeholder: "you@yourco.com",
        autoFocus: true,
        required: true
      },
      {
        id: "login-password",
        label: "Password",
        type: "password",
        placeholder: "Maybe it's chicken...",
        autoFocus: false,
        required: true
      }
    ]
  };

  return (
    <>
      <header>
        <nav className="index-nav">
          <h1 className="index-heading">Pocket Money Tracker</h1>
          <Link href="/">
            <a className="index-link">Home</a>
          </Link>
          <Link href="/sign-up">
            <a className="index-link">Sign Up</a>
          </Link>
          <Link href="/sign-in">
            <a className="index-link">Sign In</a>
          </Link>
        </nav>
      </header>
      <section className="index">
        <h2 className="index-sub-heading">
          Teach your kids to set goals and save towards them
        </h2>
        <div className="index-login">
          <h3 className="index-login-heading">{loginInputs.heading}</h3>
          <Form inputs={loginInputs.inputs} />
        </div>
      </section>
    </>
  );
};

export default Index;
