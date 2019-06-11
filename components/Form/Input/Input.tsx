import * as React from "react";
import "./Input.scss";

interface Props {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  autoFocus: boolean;
  required: boolean;
  val: string;
  onInputChange: Function;
}

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  autoFocus,
  required,
  val,
  onInputChange
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
        value={val}
        onChange={e => onInputChange(id, e.target.value)}
      />
    </>
  );
};

export default Input;
