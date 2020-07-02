import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from '../common/Orders';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const Train = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
        {/* Recent Orders */}
        train
        <Grid item xs={12}>
        <Paper className={classes.paper}>
            <Orders />
        </Paper>
        </Grid>
    </Grid>
  )
}
