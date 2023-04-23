import { useEffect, useState } from "react";
import styles from "../../styles/searchBar.module.css";

const SearchBar = ({
  handleInputValueFocused /* Input field focused method */,
  handleKeyDown,
  setResults /* Results from the key search */,
  inputFocusStatus /* status of the input field focus */,
}) => {
  /* method to Fetch and filter the data */
  const fetchData = (value) => {
    fetch("https://api.comparatrip.eu/cities/autocomplete/?q=" + value)
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((location) => {
          return (
            value &&
            location &&
            location.local_name &&
            location.local_name.toLowerCase().includes(value)
          );
        });

        setResults(results);
      })
      .catch((e) => console.log(e));
  };

  /* user input text */
  const [inputText, setInputText] = useState("");

  /* retrieve data according to the input text  */
  const handleInputChange = (inputVal) => {
    setInputText(inputVal);
    fetchData(inputVal.toLowerCase());
  };

  /* trigger the Enter key  */
  const inputHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleKeyDown();
    }
  };

  /* executes everytime the input focus value changes */
  useEffect(() => {
    if (!inputFocusStatus) {
      setInputText("");
    }
  }, [inputFocusStatus]);

  return (
    <div className={styles.input_wrapper}>
      <input
        className={styles.input_search}
        placeholder="Une destination, demande"
        type="search"
        value={inputText}
        onFocus={() => handleInputValueFocused()}
        onChange={(e) => handleInputChange(e.target.value)}
        onKeyDown={(e) => inputHandleKeyDown(e)}
      ></input>
      <input
        className={styles.input_search_icon}
        type="submit"
        onClick={() => handleKeyDown()}
      />
    </div>
  );
};

export default SearchBar;
