import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div>
      {/* create a form for the searchbar */}
      {/* the form will contain a text input */}
      <form class="searchbar">
        <input type="text" id="searchbarInput" maxlength="90" placeholder="Search Best Buy" autocomplete="off" spellcheck="false"></input>
      </form>
      {/* create a drop down */}
      {/* the drop down will contain 10 options (max) that match what the user is typing and each option will be a link */}
      </div>
    )
  }
}

export default Searchbar;