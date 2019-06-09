import * as React from "react";
import "./Form.scss";

import Input from "./Input/Input";
import FormButton from "./FormButton/FormButton";

interface Props {
  inputs: InputData[];
}

type InputData = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoFocus: boolean;
  required: boolean;
};

const Form = ({ inputs }: Props) => {
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
      />
    ));

  return (
    <section>
      <form className="form">
        {renderInputs()}
        <FormButton />
      </form>
    </section>
  );
};

export default Form;
