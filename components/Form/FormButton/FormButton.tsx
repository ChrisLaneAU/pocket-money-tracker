import * as React from "react";
import "./FormButton.scss";

interface Props {
  submitForm: Function;
  currentPage: string;
}

const FormButton = ({ submitForm, currentPage }: Props) => {
  return (
    <>
      <button onClick={e => submitForm(e)} className="form-button">
        {currentPage == "" ? "Login" : "Save"}
      </button>
    </>
  );
};

export default FormButton;
