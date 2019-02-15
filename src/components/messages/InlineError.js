import React from 'react'
import "semantic-ui-css/semantic.min.css";
import PropTypes from 'prop-types';

const InlineError = ({text}) => <span style={{color: "#db2828"}}>{text}</span>;

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError
