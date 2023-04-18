import React from 'react'



const SearchResult = ({result, handleSearchItemClick}) => {
  
  return (
    <div onClick={()=>handleSearchItemClick(result)}>
     {result} 
    </div>
  )
}

export default SearchResult

