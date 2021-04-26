import React from 'react';

const SearchBar = ({onFilterChange, onSortChange, sort}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alpha" checked={sort === "alpha"} onChange={onSortChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="price" checked={sort === "price"} onChange={onSortChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={onFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
