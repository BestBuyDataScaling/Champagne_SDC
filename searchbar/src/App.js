import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import SearchResults from './components/SearchResults';
import { Grid } from '@material-ui/core';
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

  return (
    <div id="header">
      <Grid container className="upperNav">
        <Grid item className="logo">
          <img id="logo" src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/bby_logo-82846.png" alt="BestBuy logo" />
        </Grid>
        <Grid container className="upperRightContainer">
          <Grid container className="topNavItems">
            <Grid item className="topNavItem">
              <ul>
                <li>Credit Cards</li>
                <li>Top Deals</li>
                <li>Deal of the Day</li>
                <li>Gift Cards</li>
                <li>For Your Business</li>
                <li>Back to School</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="middleNav">
          <Grid container className="searcbar">
            <Grid item id="searchbar">
              <Searchbar options={options} handleChange={handleChange} handleSearchSubmit={handleSearchSubmit} />
            </Grid>
          </Grid>
            <Grid container className="middleRighNav">
              <Grid container className="cartContainer">
                <Grid item className="cartBtnItem">
                  <Button id="cartBtn" text="Cart">
                    <ShoppingCart/>
                    <span class="cartLabel">Cart</span>
                  </Button>
                </Grid>
              </Grid>
              <Grid container className="storeContainer">
                <Grid item className="storeIcon">
                  <Store />
                  <span class="storeLabel">Mueller Airport</span>
                </Grid>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
      <Grid container className="lowerNav" >
        <Grid container className="lowerLeftNav">
          <Grid item className="lowerLeftNavItems">
            <ul>
              <li>Products</li>
              <li>Brands</li>
              <li>Deals</li>
              <li>Services</li>
            </ul>
          </Grid>
        </Grid>
        <Grid container className="lowerRightNav">
          <Grid item className="lowerRightNavItems">
            <ul>
              <li><AccountCircle />Account</li>
              <li>Recently Viewed</li>
              <li>Order Status</li>
              <li>Saved Items</li>
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <SearchResults searchResults={searchResults} />
    </div>
  )
}

export default App;