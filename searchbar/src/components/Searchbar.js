import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Searchbar = (props) => {
  const { options, handleChange, handleSearchSubmit } = props;
  // console.log(props.options)
  return (
    <div className="searchbarContainer">
      <Autocomplete
        id="searchbar"
        options={options.map(option => option.name)}
        renderInput={(params) => (
          <TextField onChange={(e) => handleChange(e)} id="searchText"
            {...params}
            placeholder="Search Best Buy"
            maxLength="50"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search',
              endAdornment: (
                <InputAdornment>
                  <Button id="searchBtn" onClick={(e) => handleSearchSubmit(e)} >
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

export default Searchbar;