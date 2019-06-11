import React, { Fragment, Component } from "react";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Form from '../../form';
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  formControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      open: false,
      exercise: {
        title: "",
        description: "",
        muscles: ""
      }
    };

    handleToggle = () => this.setState({ open: !this.state.open });

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        exercise: {
          ...this.state.exercise,
          [name]: value
        }
      });
    };

    handleSubmit = () => {
      //TODO validate
      const { exercise } = this.state;
      this.props.onExerciseCreate(exercise);
      this.setState({exercise: {
        title: "",
        description: "",
        muscles: ""
      }})
    };

    render() {
      const {
        open,
        exercise: { title, description, muscles }
      } = this.state;
      const { classes, muscles: categories } = this.props;

      return (
        <Fragment>
          <Fab
            color="primary"
            aria-label="Add"
            size="small"
            onClick={this.handleToggle}
          >
            <AddIcon />
          </Fab>
          <Dialog
            open={open}
            onClose={this.handleToggle}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">
              Create a new exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill the form below:</DialogContentText>
              <Form {...this.state} classes={classes} categories={categories} onHandleChange={this.handleChange}/>
            </DialogContent>
            <DialogActions>
              <Button
                color="primary"
                variant="raised"
                onClick={this.handleSubmit}
              >
                Create
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      );
    }
  }
);
