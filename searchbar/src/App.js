import React, {useEffect, useState} from 'react';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import axios from 'axios';

const App = () => {
  const [options, setOptions] = useState([])
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([])

  // should pull mock data and store in state as an array
  useEffect(() => {
    axios.get(`http://localhost:3001/products`)
    .then(res => {
      setOptions(res.data)
    })
    .catch(err => {
      console.log(`Axios error getting all products: ${err}`)
    })
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  // should query database for relevant search results
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    let query = searchText

    axios.get(`http://localhost:3001/products/${query}`)
      .then(res => {
        console.log(res);
        setSearchResults(res.data);
        setSearchText('');
      })
      .catch(err => {
        console.log(`Axios error getting all products: ${err}`)
      })
  }

  return (
    <div>
      <Searchbar options={options} handleChange={handleChange} handleSearchSubmit={handleSearchSubmit} />
      <SearchResults searchResults={searchResults} />
    </div>
  )
}

export default App;