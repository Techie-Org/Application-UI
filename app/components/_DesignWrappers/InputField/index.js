import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox, Radio, TextField } from '@mui/material';

const InputField = (props) => {
  const {
    input: { value: inputValue, onChange: inputChange },
    checkboxValue,
    meta,
    ...other
  } = props;

  const handleChange = (event) => {
    inputChange(event);
  };

  const renderInputField = () => {
    switch (props.type) {
      case 'text':
      case 'password':
        return (
          <TextField
            margin="dense"
            value={inputValue}
            onChange={handleChange}
            {...other}
          />
        );
      case 'radio':
        return (
          <FormControlLabel
            value={inputValue}
            control={<Radio />}
            onChange={handleChange}
            {...other}
          />
        );
      case 'checkbox':
        return (
          <FormControlLabel
            value={inputValue}
            control={<Checkbox name={checkboxValue} />}
            onChange={handleChange}
            {...other}
          />
        );
      default:
        return null;
    }
  };

  return renderInputField();
};

InputField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.object,
};

export default InputField;
