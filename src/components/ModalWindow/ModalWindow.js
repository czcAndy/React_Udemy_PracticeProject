import "./ModalWindow.css";
import reactDom from "react-dom";

const ModalWindow = (props) => {
  const onHideModal = () => {
      props.onClose();
  }
  
  if (!props.open) return null;

  return reactDom.createPortal(
    <>
      <div className="modal-container">
        <h1 className="modal-title">Action needed</h1>
        <p className="modal-message">{props.message}</p>
      </div>
      <div title="modal-background" className="modal-background"  onClick={onHideModal}></div>
    </>,
    document.getElementById('modal')
  );
};

export default ModalWindow;
