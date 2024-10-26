import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControlLabel,
  Radio,
} from '@mui/material';

const InputField = (props) => {
  const {
    input: { value: inputValue, onChange: inputChange },
    ...other
  } = props;

  const handleChange = (event) => {
    inputChange(event);
  };

  return (
    <FormControlLabel
      value={inputValue}
      control={<Radio />}
      onChange={handleChange}
      {...other}
    />
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string,
  input: PropTypes.object,
};

export default InputField;
