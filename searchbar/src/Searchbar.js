import React from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount = () => {
    this.getProducts();
  }

  getProducts = () => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      // console.log(res);
      this.setState({
        products: res.data
      })
    })
    .catch(err => {
      console.log(`Axios error getting all products: ${err}`)
    })
  }

  render() {
    return (
      <div>
      <Autocomplete
        id="searchbar"
        options={this.state.products.map((product) => product.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Best Buy..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search', endAdornment: (
              <InputAdornment>
                <Button>
                  <Search />
                </Button>
              </InputAdornment> )
           }}
          />
        )}
      />
    </div>
    )
  }
}

export default Searchbar;