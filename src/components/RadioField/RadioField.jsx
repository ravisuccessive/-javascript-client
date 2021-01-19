import React from 'react';
import PropTypes from 'prop-types';
import { Input, Err } from './style';

export default function RadioField(props) {
  const {
    error, onChange, options, onBlur,
  } = props;
  return (
    <>
      { options.map(({ value, label }) => (
        <div key={label}>
          <Input type="radio" name="sport" value={value} onChange={onChange} error={error} onBlur={onBlur} />
          { label }
        </div>
      ))}
      <Err>{error}</Err>
    </>
  );
}
RadioField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  onBlur: PropTypes.string.isRequired,
};
RadioField.defaultProps = {
  error: '',
  options: [],
};