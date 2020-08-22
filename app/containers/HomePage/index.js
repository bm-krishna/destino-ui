/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Typography, Paper, Button, TextField } from '@material-ui/core';
import { styleGenerator } from './styles';
export default function HomePage() {
  const classes = styleGenerator();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography color="primary" style={{ padding: 8 }} variant="h5">
            Destino
          </Typography>
          <TextField
            id="name"
            label="User Name"
            color="primary"
            className={classes.textField}
          />
          <TextField
            id="name"
            label="Password"
            color="primary"
            className={classes.textField}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.loginButton}
          >
            login
          </Button>
        </Paper>
      </div>
    </div>
  );
}
