import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({value, toFilter}) {
  return (
    <div>
      <input type="text" name="filter" value={value} onChange={toFilter}/>
    </div>
  )
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  toFilter: PropTypes.func,
}