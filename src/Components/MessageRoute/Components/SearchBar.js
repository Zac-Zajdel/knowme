import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <form
        className='search-users'
        onSubmit={this.onSubmit}
      >
        <input
          type='text'
          placeholder='Find a Friend'
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default SearchBar;