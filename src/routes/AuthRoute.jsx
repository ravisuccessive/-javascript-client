import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthLayout } from '../Layouts';

export default function AuthRoute({ component: Component, ...rest }) {
    return (
      <Route
            {...rest}
            render={(matchProps) => (
              <AuthLayout>
                <Component {...matchProps} />
              </AuthLayout>
            )} />
    );
}
AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
};
