import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import { ShoppingCart } from '@material-ui/icons';
import { Store } from '@material-ui/icons';
import { AccountCircle } from '@material-ui/icons';
import { Button } from '@material-ui/core';
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

  const handleProductClick = (e) => {
    e.preventDefault();

    let name = e.target.value
    console.log(`event target value: ${name}`)

    let product = options.filter(option => option.name === name)

    return product[0].uniqueID;
  }

  return (
    <div>
      <div className="header">
          <div className="logo">
            <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/bby_logo-82846.png" alt="BestBuy logo" />
          </div>
          <div className="middleNav">
            <Searchbar options={options} handleProductClick={handleProductClick} handleChange={handleChange} handleSearchSubmit={handleSearchSubmit} />
          </div>
          <div className="cartContainer">
            <Button id="cartBtn">
              <ShoppingCart/>
              <span className="cartLabel">Cart</span>
            </Button>
          </div>
          <div className="storeContainer">
            <div className="storeIcon">
              <Store />
              <span className="storeLabel">Mueller Airport</span>
            </div>
          </div>
          <div className="upperRightContainer">
            <ul>
              <li>Credit Cards</li>
              <li>Top Deals</li>
              <li>Deal of the Day</li>
              <li>Gift Cards</li>
              <li>For Your Business</li>
              <li>Back to School</li>
            </ul>
          </div>
      </div>
      <div className="lowerNav">
        <div className="lowerLeftNav">
          <ul>
            <li>Products</li>
            <li>Brands</li>
            <li>Deals</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="lowerRightNav">
          <ul>
            <li><AccountCircle />  Account</li>
            <li>Recently Viewed</li>
            <li>Order Status</li>
            <li>Saved Items</li>
          </ul>
        </div>
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  )
}

export default App;