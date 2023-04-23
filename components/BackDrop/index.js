import styles from "../../styles/backdrop.module.css";

const BackDrop = ({ handleBackdropClicked }) => {
  const onBackdropClicked = () => {
    if (handleBackdropClicked) {
      handleBackdropClicked();
    }
  };
  return (
    <div
      className={styles.backdrop_style}
      onClick={() => onBackdropClicked()}
    ></div>
  );
};

export default BackDrop;
