import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const Map = () => {
  const classes = useStyles();
  return (
    <>
      <Title>地図</Title>
      <Grid container spacing={3}>        
          <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
          </Grid>
      </Grid>
    </>
  )
}
