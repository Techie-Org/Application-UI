import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox, Radio, TextField } from '@mui/material';

const InputField = (props) => {
  const {
    input: { value: inputValue, onChange: inputChange },
    meta,
    ...other
  } = props;

  const handleChange = (event) => {
    inputChange(event);
  };

  const renderInputField = () => {
    const { type = '', label = '', input: { name = '' } = {} } = props;
    if (type === 'text') {
      return (
        <TextField
          margin="dense"
          value={inputValue}
          onChange={handleChange}
          {...other}
        />
      );
    }
    if (type === 'radio') {
      return (
        <FormControlLabel
          value={inputValue}
          control={<Radio />}
          onChange={handleChange}
          {...other}
        />
      );
    }
    if (type === 'checkbox') {
      return (
        <FormControlLabel
          model="Terms"
          control={<Checkbox name={name} />}
          label={label}
          type="checkbox"
          {...other}
        />
      );
    }
    return null;
  };

  return renderInputField();
};

InputField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
};

export default InputField;
