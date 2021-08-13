import "./ModalWindow.css";
import reactDom from "react-dom";

const ModalWindow = (prop) => {
  return reactDom.createPortal(
    <>
      <div className="modal-container">
        <h1 className="modal-title">Action needed</h1>
        <p className="model-message">Error message</p>
      </div>
      <div className="modal-background"></div>
    </>,
    document.getElementById("modal")
  );
};

export default ModalWindow;
