import React from 'react';

const SearchResults = (props) => {
  const { searchResults } = props;
  // console.log(props.options)
  return (
    <div>
      {searchResults.map(result => {
        return <h5 key={result.uniqueID}>Product ID:{result.uniqueID} Name:{result.name}</h5>
      })}
    </div>
  )
}

export default SearchResults;