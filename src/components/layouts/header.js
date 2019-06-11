import React, { Fragment, Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CreateDialog from "../exercises/dialogs/create";
// import { muscles } from "../../store";

export default class Header extends Component {
  render() {
    const { muscles, onExerciseCreate } = this.props;
    return (
      <Fragment>
        <AppBar position="static">
          <ToolBar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{ flex: 1 }}>
              MG Exercises Database
            </Typography>
            <CreateDialog
              muscles={muscles}
              onExerciseCreate={onExerciseCreate}
            />
          </ToolBar>
        </AppBar>
      </Fragment>
    );
  }
}
