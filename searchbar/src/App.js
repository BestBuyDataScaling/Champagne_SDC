import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import axios from 'axios';

const App = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //should pull mock data and store in state as an array
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
    setSearchText(e.target.value);
  }

  // should query database for relevant search results
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    let query = searchText

    axios.get(`http://localhost:3001/products/${query}`)
      .then(res => {
        setSearchResults(res.data);
      })
      .catch(err => {
        console.log(`Axios error getting all products: ${err}`)
      })
  }

  return (
    <div className="header">
      <div className="top-navbar">
        <div className="logo">
          <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/bby_logo-82846.png" alt="BestBuy logo" />
        </div>
        <Searchbar options={options} handleChange={handleChange} handleSearchSubmit={handleSearchSubmit} />
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  )
}

export default App;