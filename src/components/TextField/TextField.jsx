import React from 'react';

import PropTypes from 'prop-types';

import { Error, Input } from './style';

export const TextField = (props) => {
    const { value, onChange, error } = props;
    return (
      <>
        <Input type="text" value={value}  onChange={onChange} />
        <Error>{error}</Error>
      </>
    );
};
TextField.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.string,
    error: PropTypes.string,
};
TextField.defaultProps = {
    value: '',
    disabled: '',
    error: '',
};