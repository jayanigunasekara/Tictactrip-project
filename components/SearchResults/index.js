import styles from "../../styles/searchResult.module.css";
import ResultItem from "./ResultItems";

const SearchResults = ({
  results,
  handleSearchItemClick,
  popularResults,
  fromLocation,
}) => {
  return (
    <div className={styles.search_result_wrapper}>
      <div className={styles.search_result_style}>
        {fromLocation && (
          <h1 className={styles.heading_text_style}>
            Villes populaires au départ de {fromLocation}
          </h1>
        )}
        {results.map((resultItem, index) => {
          return (
            <ResultItem
              key={index}
              resultItem={resultItem}
              handleSearchItemClick={handleSearchItemClick}
            />
          );
        })}
        {fromLocation && (
          <h1
            className={styles.heading_text_style}
            style={{ marginTop: "5px" }}
          >
            Villes les plus populaires{" "}
          </h1>
        )}
        {popularResults &&
          popularResults.map((resultItem, index) => {
            return (
              <ResultItem
                key={index}
                resultItem={resultItem}
                handleSearchItemClick={handleSearchItemClick}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
