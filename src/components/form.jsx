import React, { Component } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  formControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    render() {
      const {
        title,
        description,
        muscles,
        classes,
        categories,
        onHandleChange
      } = this.props;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={onHandleChange("title")}
            margin="normal"
            className={classes.formControl}
          />
          <br />
          <TextField
            label="Description"
            value={description}
            multiline
            rowsMax="4"
            onChange={onHandleChange("description")}
            margin="normal"
            className={classes.formControl}
          />
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>
            <Select value={muscles} onChange={onHandleChange("muscles")}>
              {categories.map(category => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      );
    }
  }
);
