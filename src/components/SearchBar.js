import React from 'react';
import './css/SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="SearchBar">
      <div className="container">
        <form>
          <input type="text" placeholder="Enter the name of the show" />
          <button type="submit" className="main-btn">Search</button>
        </form>
      </div>
    </div>
  )
}

export default SearchBar
