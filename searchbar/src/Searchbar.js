import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const Searchbar = (props) => {
  const { options, handleChange } = props;
  console.log(props.options)
  return (
    <div>
      <Autocomplete
        id="searchbar"
        options={options.map(option => option.name)}
        renderInput={(params) => (
          <TextField onChange={(e) => handleChange(e)} id="searchText"
            {...params}
            placeholder="Search Best Buy..."
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search',
              endAdornment: (
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

export default Searchbar;