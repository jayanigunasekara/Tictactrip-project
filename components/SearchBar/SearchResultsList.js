import React, { useState } from 'react'
import SearchResult from './SearchResult'


const SearchResultsList = ({results, handleSearchItemClick }) => {

  

  return (
    <div className='results-list'>
        {
            results.map((result, id)=>{
                return <SearchResult result = {result.local_name} key = {id} handleSearchItemClick={handleSearchItemClick}/>
            } )
        }
      
    </div>
  )
}

export default SearchResultsList
