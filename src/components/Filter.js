import React from 'react';

const Filter = ({ onFilter, onSortChange }) => {
  return (
    <span className='sort-filter-buttons'>
      <button onClick={ onFilter }>Filter by Greased</button>
      <button onClick={ onSortChange }>Sort by Name</button>
      <button onClick={ onSortChange }>Sort by Weight</button>
    </span>
  )
}

export default Filter;