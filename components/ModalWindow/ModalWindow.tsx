import * as React from "react";
import "./ModalWindow.scss";

interface Props {
  heading: string;
  setShowModal: Function;
  children: any;
}

const ModalWindow = ({ heading, setShowModal, children }: Props) => {
  return (
    <section className="modal-window">
      <div className="modal-window-bg" />
      <div className="modal-window-content">
        <button
          onClick={() => setShowModal(false)}
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
