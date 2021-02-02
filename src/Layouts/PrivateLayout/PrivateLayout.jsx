import React from 'react';
import PropTypes from 'prop-types';
import { NavBar } from '../components';

const PrivateLayout = ({ children }) => (
  <div>
    <NavBar />
    <br />
    <div>{children}</div>
    &nbsp;
  </div>
);
PrivateLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PrivateLayout;