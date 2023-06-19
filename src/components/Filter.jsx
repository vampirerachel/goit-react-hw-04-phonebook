import React from "react";
import PropTypes from "prop-types";


const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <p>Filter contacts</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default Filter;
