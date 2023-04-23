import styles from "../../styles/resultItem.module.css";

const ResultItem = ({ resultItem, handleSearchItemClick }) => {
  const { local_name } = resultItem;
  return (
    <div
      className={styles.result_item_style}
      onClick={() => handleSearchItemClick(resultItem)}
    >
      {local_name}
    </div>
  );
};

export default ResultItem;
