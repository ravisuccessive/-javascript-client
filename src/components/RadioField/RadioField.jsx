import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './style';
import { Sports } from '@material-ui/icons';

export default function RadioField(props) {
    const {
        error, onChange, options,
    } = props;
    return (
      <>
        { options.map(({ value, label }) => (
          <div key={label}>
            <Input type="radio" name={Sports} value={value} onChange={onChange} error={error} />
            { label}
          </div>
            ))}
      </>
    );
}
RadioField.propTypes = {
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object),
};
RadioField.defaultProps = {
    error: '',
    options: [],
};