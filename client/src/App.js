import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import { ShoppingCart } from '@material-ui/icons';
import { Store } from '@material-ui/icons';
import { AccountCircle } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import axios from 'axios';

const App = () => {
  const [options, setOptions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  //should pull mock data and store in state as an array
  useEffect(() => {
    axios.get(`/products`)
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

    axios.get(`/products/${query}`)
      .then(res => {
        setSearchResults(res.data);
      })
      .catch(err => {
        console.log(`Axios error getting all products: ${err}`)
      })
  }

  // should return id of selected product name
  // TODO: should send clicked ID to the product and reviews component
  const handleProductSelectChange = (e) => {

    let name = e.target.innerHTML

    let product = options.filter(option => option.name === name)

    console.log(product[0].uniqueID)
  }

  return (
    <div>
      <div className="header">
          <div className="logo">
            <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/bby_logo-82846.png" alt="BestBuy logo" />
          </div>
          <div className="middleNav">
            <Searchbar options={options} handleProductSelectChange={handleProductSelectChange} handleChange={handleChange} handleSearchSubmit={handleSearchSubmit} />
          </div>
          <div className="middleRightNav">
            <div id="store">
              <IconButton color="inherit">
                <Store id="storeBtn" />
              </IconButton>HRATX50
            </div>
            <div id="cart">
              <IconButton color="inherit">
                <ShoppingCart id="cartBtn"/>
              </IconButton>Cart
            </div>
          </div>
          <div className="upperRightContainer">
              <div>Credit Cards</div>
              <div>Top Deals</div>
              <div>Deal of the Day</div>
              <div>Gift Cards</div>
              <div>For Your Business</div>
              <div>Back to School</div>
          </div>
      </div>
      <div className="lowerNav">
        <div className="lowerLeftNav">
          <div>Products</div>
          <div>Brands</div>
          <div>Deals</div>
          <div>Services</div>
        </div>
        <div className="lowerRightNav">
          <div>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>Account
          </div>
          <div>Recently Viewed</div>
          <div>Order Status</div>
          <div>Saved Items</div>
        </div>
      </div>
      <SearchResults searchResults={searchResults} />
    </div>
  )
}

export default App;