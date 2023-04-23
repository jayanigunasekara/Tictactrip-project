import { useRouter } from "next/router";
import styles from "@/styles/Search.module.css";
import { useEffect, useRef, useState } from "react";
import { BsArrowDownUp } from "react-icons/bs";
import BackDrop from "@/components/BackDrop";
import SearchResults from "@/components/SearchResults";

export default function Search() {
  const router = useRouter();
  const { fromLocalName, fromUniqueName } = router.query; /* query parameters */

  const defaultInputRef = useRef(); /* identify the dafualt input field */
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [whichInputIsFocused, setWhichInputIsFocused] = useState("toInput");
  const [fromInput, setFromInputText] = useState("");
  const [toInput, setToInputText] = useState("");
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [bestDestMatchFromResults, setBestDestMatchFromResults] = useState([]);
  const [popularDestinationResults, setPopularDestinationResults] = useState(
    []
  );

  /* call auto-complete API  */
  const fetchDataAutoComplete = (value) => {
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
        console.log(results);
        setAutoCompleteResults(results);
      })
      .catch((e) => console.log(e));
  };

  /* Handle Input field from */
  const handleFromInputChange = (inputVal) => {
    setFromInputText(inputVal);
    setBestDestMatchFromResults([]);
    setPopularDestinationResults([]);
    fetchDataAutoComplete(inputVal.toLowerCase());
  };

  /* Handle Input field to */
  const handleToInputChange = (inputVal) => {
    setToInputText(inputVal);
    setBestDestMatchFromResults([]);
    setPopularDestinationResults([]);
    fetchDataAutoComplete(inputVal.toLowerCase());
  };

  /* Handle Input field focused */
  const inputValueFocused = (_fromWhichInput) => {
    onBackdropClicked();
    setIsInputFocused(true);
    setWhichInputIsFocused(_fromWhichInput);
  };

  /* Handle backdrop click */
  const onBackdropClicked = () => {
    setIsInputFocused(false);
    setAutoCompleteResults([]);
    setBestDestMatchFromResults([]);
    setPopularDestinationResults([]);
  };

  /* Triger enter key from input field */
  const inputFromHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleFromResultItemClicked(autoCompleteResults[0]);
    }
  };

  /* Triger enter key to  input field*/
  const inputToHandleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleToResultItemClicked(autoCompleteResults[0]);
    }
  };

  /* Handle the result items click from  */
  const handleFromResultItemClicked = (_choosedFromLocation) => {
    setFromInputText(_choosedFromLocation.local_name);
    onBackdropClicked();
  };

  /* Handle the result items click to  */
  const handleToResultItemClicked = (_choosedDestination) => {
    setToInputText(_choosedDestination.local_name);
    onBackdropClicked();
  };

  /* handle  swap button */
  const onSwapButtonClicked = () => {
    setFromInputText(toInput);
    setToInputText(fromInput);
  };

  /* call popular destination-from API */
  useEffect(() => {
    const fetchBestDestFromGivenFrom = (fromVal) => {
      fetch("https://api.comparatrip.eu/cities/popular/from/" + fromVal + "/5")
        .then((response) => response.json())
        .then((data) => {
          const results = data;
          setBestDestMatchFromResults(results);
        })
        .catch((e) => console.log(e));
    };

    /* call popular destination API */
    const fetchPopularDestinations = () => {
      fetch("https://api.comparatrip.eu/cities/popular/5")
        .then((response) => response.json())
        .then((data) => {
          const results = data;
          setPopularDestinationResults(results);
        })
        .catch((e) => console.log(e));
    };

    if (fromLocalName && fromUniqueName) {
      setFromInputText(fromLocalName);
      fetchBestDestFromGivenFrom(fromUniqueName);
      fetchPopularDestinations();
    }
  }, [fromLocalName]);

  /* Execute defalut input ref is captured */
  useEffect(() => {
    if (defaultInputRef && defaultInputRef.current) {
      defaultInputRef.current.focus();
    }
  }, [defaultInputRef]);

  return (
    <div className={styles.search_page_style}>
      {isInputFocused && <BackDrop handleBackdropClicked={onBackdropClicked} />}
      <div className={styles.search_page_boxes}>
        <div className={styles.from_search_box}>
          <label className={styles.label_style}>Départ :</label>
          <input
            className={styles.input_style}
            placeholder="D'où partons-nous ?"
            type="search"
            value={fromInput}
            onFocus={() => inputValueFocused("fromInput")}
            onChange={(e) => handleFromInputChange(e.target.value)}
            onKeyDown={(e) => inputFromHandleKeyDown(e)}
          ></input>
        </div>
        <div className={styles.to_search_box}>
          <label className={styles.label_style}>Arrivée :</label>
          <input
            ref={defaultInputRef}
            className={styles.input_style}
            placeholder="Où allons-nous ?"
            type="search"
            value={toInput}
            onFocus={() => inputValueFocused("toInput")}
            onChange={(e) => handleToInputChange(e.target.value)}
            onKeyDown={(e) => inputToHandleKeyDown(e)}
          ></input>
        </div>
        <div
          className={styles.swap_button}
          onClick={() => onSwapButtonClicked()}
        >
          <BsArrowDownUp />
        </div>
      </div>
      {/* If best destinations-from select */}
      {bestDestMatchFromResults.length > 0 && (
        <div className={styles.result_container}>
          <SearchResults
            results={bestDestMatchFromResults}
            handleSearchItemClick={handleToResultItemClicked}
            popularResults={popularDestinationResults}
            fromLocation={fromInput}
          />
        </div>
      )}
      {/* If auto-complete select */}
      {autoCompleteResults.length > 0 && (
        <div className={styles.result_container}>
          <SearchResults
            results={autoCompleteResults}
            handleSearchItemClick={
              whichInputIsFocused === "toInput"
                ? handleToResultItemClicked
                : handleFromResultItemClicked
            }
          />
        </div>
      )}
    </div>
  );
}
