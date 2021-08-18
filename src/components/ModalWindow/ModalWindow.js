import styles from "./ModalWindow.module.css";
import reactDom from "react-dom";

const ModalWindow = (props) => {
  const onHideModal = () => {
      props.onClose();
  }
  
  if (!props.open) return null;

  return reactDom.createPortal(
    <>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Action needed</h1>
        <p className={styles["message"]}>{props.message}</p>
      </div>
      <div title="background" className={styles["background"]}  onClick={onHideModal}></div>
    </>,
    document.getElementById('modal')
  );
};

export default ModalWindow;
