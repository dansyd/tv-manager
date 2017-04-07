import React from 'react';
import './css/SearchFilter.css';
import MdCancel from 'react-icons/lib/md/cancel';

const SearchFilter = ({searchTerm, onClearSearch}) => {
  if (!searchTerm) {
    return (<div><h2>Popular Shows</h2></div>)
  }
  return (
    <div>
      <h2>Showing results for: <span onClick={onClearSearch} className="active-search-filter">{searchTerm} <MdCancel /> </span></h2>
    </div>
  )

}

export default SearchFilter
