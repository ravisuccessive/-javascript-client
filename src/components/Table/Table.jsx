import React from 'react';
import PropTypes from 'prop-types';
import {
  Table, TableCell, TableContainer, TableHead, TableRow, Paper, withStyles, TableBody,
} from '@material-ui/core';

const useStyles = () => ({
  table: {
    minWidth: '650px',
  },
  header: {
    color: 'grey',
  },
  TableContainer: {
    marginTop: '20px',
  },
});
const TableComponent = (props) => {
  const { classes, data, column } = props;
  return (
    <TableContainer className={classes.TableContainer} component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              column.map(({ align, label }) => (
                <TableCell className={classes.header} align={align}>{label}</TableCell>
              ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ name, email }) => (
            <TableRow>
              <TableCell align={column[0].align}>
                {name}
              </TableCell>
              <TableCell>{email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
TableComponent.defaultPropsTypes = {
    data: [],
    column:[]
}
TableComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf.isRequired,
  column: PropTypes.arrayOf.isRequired,
};
export default withStyles(useStyles)(TableComponent);