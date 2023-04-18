import React, { useState } from 'react'
import SearchBar from "../components/SearchBar"
import SearchResultsList from '@/components/SearchBar/SearchResultsList'

const Layout = () => {
    const [results, setResults] = useState([])

    const [selectedLocation, setSelectedLocation] = useState('')
  
    const handleSearchItemClick = (choosedLocation)=>{
      console.log("onclick works");
      setSelectedLocation(choosedLocation);
    }

  return (
    <div>
      <SearchBar selectedLocation = {selectedLocation} setResults={setResults}/>
      {results && results.length > 0 && <SearchResultsList results={results} handleSearchItemClick = {handleSearchItemClick }  />}
   
    </div>
  )
}

export default Layout
