import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, CssBaseline, Button, withStyles,
} from '@material-ui/core';

const style = () => ({
  title: {
    flexGrow: 1,
  },
  logout: {
    flexGrow: 0.05,
  },
});

function NavBar(props) {
  const { classes } = props;
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Button color="inherit">trainee</Button>
          <Button color="inherit">textfielddemo</Button>
          <Button color="inherit">inputdemo</Button>
          <Button color="inherit">childrendemo</Button>
          <Button color="inherit" className={classes.logout}>LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
NavBar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(style)(NavBar);
