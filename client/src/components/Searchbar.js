import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import handleRenderOption from './handleRenderOption';

const Searchbar = (props) => {
  const { options, handleChange, handleSearchSubmit, handleProductSelectChange } = props;
  // console.log(props.options)
  return (
    <div className="searchbarContainer">
      <Autocomplete onChange={(e) => handleProductSelectChange(e)}
        id="searchbar"
        options={options.map(option => option.name)}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
          onChange={(e) => handleChange(e)} id="searchText"
            {...params}
            placeholder="Search Best Buy"
            maxLength="50"
            margin="none"
            variant="outlined"
            size="medium"
            style={{
              backgroundColor: "white",
            }}
            InputProps={{ ...params.InputProps, type: 'search', style: {fontSize: 20},
              endAdornment: (
                <InputAdornment>
                  <Button id="searchBtn" onClick={(e) => handleSearchSubmit(e)} >
                    <Search />
                  </Button>
                </InputAdornment> )
            }}
          />
        )}
        renderOption={handleRenderOption}
      />
    </div>
  )
}

export default Searchbar;
