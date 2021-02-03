/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PrivateLayout } from '../Layouts';

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <PrivateLayout>
                    <Component {...matchProps} />
                </PrivateLayout>
            )} />
    );
}
PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};
