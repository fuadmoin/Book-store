import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ removeBook, id }) => (
  <button type="button" onClick={() => removeBook(id)}>Remove</button>
);
Buttons.propTypes = {
  removeBook: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default Buttons;
