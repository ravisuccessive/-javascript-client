import React from 'react';
import PropTypes from 'prop-types';

const Result = (first, second, operator) => {
    let result;
    if (!['+', '-', '*', '/'].includes(operator)) {
        result = 'invalid operation';
    } else {
        result = eval(`${first} ${operator} ${second}`);
    }
    return result;
};
const Calculation = (props) => {
    const {
        first, second, operator, children,
    } = props;
    if (children) {
        return children(first, second, Result(first, second, operator));
    }
    return (
      <p>
        {`Result of ${first} ${operator} ${second} is ${Result(first, second, operator)}`}
      </p>
    );
};

Calculation.propTypes = {
    first: PropTypes.number.isRequired,
    second: PropTypes.number.isRequired,
    operator: PropTypes.string.isRequired,
    children: PropTypes.func,
};

Calculation.defaultProps = {
    children: null,
};

export default Calculation;