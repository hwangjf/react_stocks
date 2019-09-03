import React from 'react';

const SearchBar = props => {
  console.log(props)
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input 
          type="radio" 
          value="Alphabetically" 
          checked={props.sort === "Alphabetically" ? true : false} 
          // onChange={handleRadioToAlphabetically}
          onChange={props.handleRadioToAlphabetically }
        />
        Alphabetically
        <input 
          type="radio" 
          value="Price" 
          checked={props.sort === "Price" ? true : false} 
          onChange={props.handleRadioToPrice}
        />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
