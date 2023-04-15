import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ removeBook, id }) => (
  <div className="button-container">
    <button type="button" className="buttons">Comments</button>
    <button type="button" className="buttons" onClick={() => removeBook(id)}>Remove</button>
    <button type="button" className="buttons">Edit</button>
  </div>
);
Buttons.propTypes = {
  removeBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Buttons;
