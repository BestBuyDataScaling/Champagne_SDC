import React from 'react';

const SearchResults = (props) => {
  const { searchResults } = props;
  // console.log(props.options)
  return (
    <div>
      <p>{searchResults}</p>
    </div>
  )
}

export default SearchResults;