import React from 'react';
import PropTypes from 'prop-types';
import { Footer } from '../components/index';

const AuthLayout = ({ children }) => (
  <div>
    <div>{children}</div>
    <Footer />
  </div>
);
AuthLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default AuthLayout;