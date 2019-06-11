import React, { Fragment } from "react";
import { Grid, Paper, Typography, IconButton } from "@material-ui/core";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import Form from '../form'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

export default ({
  exercises,
  category,
  onSelect,
  onExerciseDelete,
  onExerciseEdit,
  editMode,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  }
}) => (
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          !category || category === group ? (
            <Fragment>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              {exercises.map(({ id, title }) => (
                <List>
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                    <IconButton onClick={() => onExerciseEdit(id)}>
                        <Edit />
                      </IconButton>
                      <IconButton onClick={() => onExerciseDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              ))}
            </Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item xs={6}>
      <Paper style={styles.Paper}>
      {/* TODO add some props to Form component below */}
      {editMode ? <Form/>: <Fragment>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{description}</Typography>
      </Fragment>}
        
      </Paper>
    </Grid>
  </Grid>
);
