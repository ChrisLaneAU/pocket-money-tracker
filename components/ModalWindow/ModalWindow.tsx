import * as React from "react";
import "./ModalWindow.scss";

interface Props {
  heading: string;
  showForm: Function;
  children: any;
}

const ModalWindow = ({ heading, showForm, children }: Props) => {
  return (
    <section className="modal-window">
      <div className="modal-window-bg" />
      <div className="modal-window-content">
        <button
          onClick={() => showForm(false, heading)}
          className="modal-window-close"
        >
          &times;
        </button>
        <h2 className="modal-window-heading">{heading}</h2>
        {children}
      </div>
    </section>
  );
};

export default ModalWindow;
