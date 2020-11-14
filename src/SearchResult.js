import React from 'react';
import './SearchResult.css';
import FilterListIcon from '@material-ui/icons/FilterList';
function SearchResult() {
  return (
    <div className="searchresult">
      <div className="searchresult__filter">
        <FilterListIcon className="searchresult__filterIcon" />
        <h4>FILTER</h4>
      </div>
      <hr />
    </div>
  );
}

export default SearchResult;
