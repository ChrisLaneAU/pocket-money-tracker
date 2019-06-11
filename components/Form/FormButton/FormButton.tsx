import * as React from "react";
import "./FormButton.scss";

interface Props {
  submitForm: Function;
}

const FormButton = ({ submitForm }: Props) => {
  return (
    <>
      <button onClick={e => submitForm(e)} className="form-button">
        Submit
      </button>
    </>
  );
};

export default FormButton;
