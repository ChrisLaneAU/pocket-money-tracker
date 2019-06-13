import * as React from "react";
import Router, { withRouter } from "next/router";
import { useState } from "react";
import "./Form.scss";

import Input from "./Input/Input";
import FormButton from "./FormButton/FormButton";

interface Props {
  inputs: InputData[];
  handleButtonClick: Function;
  router: any;
}

type InputData = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoFocus: boolean;
  required: boolean;
  val: string;
  onInputChange: Function;
};

const Form = ({ inputs, handleButtonClick, router }: Props) => {
  const [formVals, setFormVals] = useState({});

  const setEachFormVal = (id: string, value: string) => {
    setFormVals({ ...formVals, [id]: value });
  };

  const renderInputs = () =>
    inputs.map(({ id, label, type, placeholder, autoFocus, required }) => (
      <Input
        key={id}
        id={id}
        label={label}
        type={type}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
        val={formVals[id] || ""}
        onInputChange={setEachFormVal}
      />
    ));

  const submitForm = (e: Event) => {
    e.preventDefault();
    if (router.route.length == 1) return Router.push("/dashboard");
    const query = `
    mutation {
      addGoal(name: "${formVals["goal-name"]}", image: "${
      formVals["goal-image"]
    }", child: "${formVals["goal-child"]}", price: "${
      formVals["goal-price"]
    }", progress: "0") {
    		id,
    		name,
        image,
        child,
        price,
        progress
      }
    }
    `;

    // const url = "http://localhost:3001/graphql";
    const url = "https://pocket-money-tracker-api.herokuapp.com/graphql";

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(console.log)
      .then(() => handleButtonClick(false, "New Goal"))
      .catch(console.error);
  };

  return (
    <section>
      <form className="form">
        {renderInputs()}
        <FormButton
          submitForm={submitForm}
          currentPage={router.route.slice(1, router.route.length)}
        />
      </form>
    </section>
  );
};

export default withRouter(Form);
