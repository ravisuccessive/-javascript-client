import React from 'react';
import Button from '@material-ui/core/Button';
import AddDialog from './components/AddDialog/AddDialog';

export default class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (data) => {
    this.setState({
      open: true,
    }, () => {
      console.log(data);
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>ADD TRAINEE</Button>
        <AddDialog open={open} onSubmit={this.handleClose} onClose={this.handleClose} />
      </>
    );
  }
}