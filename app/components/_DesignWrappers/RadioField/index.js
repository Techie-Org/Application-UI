import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FormLabel, FormControl, RadioGroup } from '@mui/material';
import { Field } from 'redux-form/immutable';
import InputField from '../InputField';

const RadioField = (props) => {
  const { className, model, form, legend, items, variant, ...other } = props;

  const componentClassName = classnames(className, {});

  return (
    <FormControl
      model={model}
      component="fieldset"
      className={componentClassName}
      {...other}
    >
      <FormLabel component="legend">{legend}</FormLabel>
      <RadioGroup
        aria-label={model}
        style={{ display: variant === 'inline' ? 'initial' : 'inherit' }}
      >
        {items?.map((item) => (
          <Field
            component={InputField}
            name={`${form}${model}`}
            type="radio"
            {...item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioField.propTypes = {
  className: PropTypes.string,
  model: PropTypes.string,
  form: PropTypes.string,
  legend: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaulMessage: PropTypes.string.isRequired,
  }),
  items: PropTypes.arrayOf(PropTypes.object),
  variant: PropTypes.oneOf(['inline, vertical']),
};

export default RadioField;
