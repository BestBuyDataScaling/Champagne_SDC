import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      {/* create a form for the searchbar */}
      {/* the form will contain a text input */}
      <form class="searchbar">
        <input type="text" id="searchbarInput" maxlength="90" placeholder="Search Best Buy" autocomplete="off" spellcheck="false"></input>

      </form>
      </div>
    )
  }
}

export default Searchbar;