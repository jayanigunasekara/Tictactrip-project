import styles from "../styles/Home.module.css";
import SearchBar from "@/components/SearchBar";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";
import { useRouter } from "next/router";
import BackDrop from "@/components/BackDrop";

export default function Home() {
  const router = useRouter();
  const [results, setResults] = useState([]);

  /* Chech whether the input field is focused or not */
  const [isInputFocused, setIsInputFocused] = useState(false);

  /*redirect to the second page when the location is selected. send queries local name and unique name  */
  const fromLocationSelectHandle = (_choosedLocation) => {
    router.push({
      pathname: "/search",
      query: {
        fromLocalName: _choosedLocation.local_name,
        fromUniqueName: _choosedLocation.unique_name,
      },
    });
  };

  /* To handle the input field -> when it is focused, the value is set to true */
  const handleInputValueFocused = () => {
    setIsInputFocused(true);
  };

  /*Handle the backdrop( grey color background) when the input field is focused  */
  const onBackdropClicked = () => {
    setIsInputFocused(false);
    setResults([]);
  };

  /* redirect to second page with data local name and unique name of the first data result*/
  const handleinputKeyDown = () => {
    if (results.length > 0) {
      router.push({
        pathname: "/search",
        query: {
          fromLocalName:
            results[0].local_name /* choose the result at the top (index 0) */,
          fromUniqueName: results[0].unique_name,
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search_input_background}>
        {/* If input fied is focused it enables the background  */}
        {isInputFocused && (
          <BackDrop handleBackdropClicked={onBackdropClicked} />
        )}
        <SearchBar
          handleInputValueFocused={handleInputValueFocused}
          handleinputKeyDown={handleinputKeyDown}
          setResults={setResults}
          inputFocusStatus={isInputFocused}
        />
      </div>
      {results.length > 0 && (
        <SearchResults
          results={results}
          handleSearchItemClick={fromLocationSelectHandle}
        />
      )}
    </div>
  );
}
