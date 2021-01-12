import React from 'react';
import PropTypes from 'prop-types';
import { Select } from './style';

function SelectField(props) {
  const {
    error, onChange, options, defaultText,onBlur
  } = props;
  return (
    <>
      <Select onChange={onChange} onBlur={onBlur}>
        <option>{defaultText}</option>
        {
          options.map(({ value, label }) => <option key={label}>{value}</option>)
        }
      </Select>
    </>
  );
}
export default SelectField;
SelectField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultText: PropTypes.string,
};
SelectField.defaultProps = {
  error: '',
  options: [],
  defaultText: 'Select',
};