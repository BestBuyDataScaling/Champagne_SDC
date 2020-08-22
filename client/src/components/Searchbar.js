import React from 'react';
import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Search } from '@material-ui/icons';
import handleRenderOption from './handleRenderOption';

const Searchbar = (props) => {
  const { options, handleChange, handleSearchSubmit, handleProductSelect } = props;

  return (
    <div className="searchbarContainer">
      {/* materail ui autocomplete filters options which match user input */}
      <Autocomplete onSelect={(e) => handleProductSelect(e)}
        id="searchbar"
        options={options.map(option => option.name)}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          // text field material ui component is the input for the searchbar
          <TextField {...params}
            // handleChange event for user input into searchbar
            onChange={(e) => handleChange(e)} id="searchText"
            placeholder="Search Best Buy"
            maxLength="50"
            margin="normal"
            variant="outlined"
            size="small"
            style={{
              backgroundColor: "white",
            }}
            InputProps={{ ...params.InputProps, type: 'search',
              endAdornment: (
                <InputAdornment>
                  <IconButton id="searchBtn" onClick={(e) => handleSearchSubmit(e)} >
                    <Search />
                  </IconButton>
                </InputAdornment> )
            }}
          />
        )}
        // handle highlighting of options which match user input
        renderOption={handleRenderOption}
      />
    </div>
  )
}

export default Searchbar;