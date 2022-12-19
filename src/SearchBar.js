import React from 'react';
class SearchBar extends React.Component {
  render() {
    return (
        <form>
            <label> Search for a fruit </label>
            <input type="text"></input>
            <button type="Submit"> Search </button>
        </form>
    );
  }
}

export default SearchBar;
