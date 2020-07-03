import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from '../common/Orders';
import { DataProps } from '../../common/types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const Top = (props: DataProps) => {
  const classes = useStyles();
  return (
    <>
      <Title>このサイトについて</Title>
      <Grid container spacing={3}>
          <Grid item xs={12}>
          <Paper className={classes.paper}>
              <Orders />
          </Paper>
          </Grid>
      </Grid>
    </>
  )
}
