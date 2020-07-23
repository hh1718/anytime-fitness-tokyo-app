import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { PageProps } from '../../common/types';
import Iframe from 'react-iframe';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const Map = (props: PageProps) => {
  const classes = useStyles();
  return (
    <>
      <Title>マップ(3.7以上)</Title>
      <Grid container spacing={3}>        
          <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Iframe
            url="https://www.google.com/maps/d/embed?mid=1gYda2DEBX3O3hbEYISzdc9UUXr69a7am&hl=ja"
            id-="gym_map"
            height="480"
          />
          </Paper>
          </Grid>
      </Grid>
    </>
  )
}
