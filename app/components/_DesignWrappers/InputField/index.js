import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox, Radio, TextField } from '@mui/material';

const InputField = (props) => {
  const {
    input,
    checkboxValue,
    meta,
    errors,
    allowPattern = null,
    ...other
  } = props;

  const handleChange = (event) => {
    const { onChange } = input;

    if (allowPattern) {
      const regex = new RegExp(allowPattern);
      if (!regex.test(event.target.value)) {
        // eslint-disable-next-line no-param-reassign
        event.target.value = input.value;
      }
    }

    onChange(event);
  };

  const generateFieldLevelErrorMessage = () => {
    const { error, submitFailed, invalid, valid } = meta;
    return error && submitFailed && invalid && !valid ? error : '';
  };

  const checkError = () => meta.error && meta.invalid && !meta.valid && meta.submitFailed;

  const renderInputField = () => {
    switch (props.type) {
      case 'text':
      case 'password':
        return (
          <TextField
            {...props.input}
            error={checkError()}
            margin="dense"
            onChange={handleChange}
            helperText={generateFieldLevelErrorMessage()}
            {...other}
          />
        );
      case 'radio':
        return (
          <FormControlLabel
            {...props.input}
            error={checkError()}
            control={<Radio />}
            onChange={handleChange}
            {...other}
          />
        );
      case 'checkbox':
        return (
          <FormControlLabel
            {...props.input}
            error={checkError()}
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
