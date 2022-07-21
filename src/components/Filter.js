import React from 'react';

const Filter = ({ sortBy, filterGreased, onFilter, onSortChange, onSearchChange }) => {

  return (
    <div>
      <span className='sort-filter-buttons'>
        <button onClick={ onFilter } className={ filterGreased ? 'filter-on' : ''}>Filter by Greased</button>
        <button
          onClick={ onSortChange }
          className={ sortBy === 'name' ? 'selected-sort-button' : '' }
          name='name'
        >
          Sort by Name
        </button>
        <button
          onClick={ onSortChange }
          className={ sortBy === 'weight' ? 'selected-sort-button' : ''}
          name='weight'
        >
          Sort by Weight
        </button>
      </span>
      <form name="search-form" className="search-form">
        <input
        type="text"
        name="search"
        placeholder="Search for a hog"
        onChange={ onSearchChange }
        />
      </form>
    </div>
  )
}

export default Filter;