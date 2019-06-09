import * as React from "react";
import "./Input.scss";

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoFocus: boolean;
  required: boolean;
}

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  autoFocus,
  required
}: Props) => {
  return (
    <>
      <label htmlFor={id} className="form-input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        required={required}
        className="form-input"
      />
    </>
  );
};

export default Input;
