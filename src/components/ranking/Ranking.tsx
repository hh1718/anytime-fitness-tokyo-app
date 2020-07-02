import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import GymCard from '../common/GymCard';
import { gymData } from '../../data/gymData'


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}));

export const Ranking = () => {
  const classes = useStyles();
  return (
    <>
      <Title>ランキング</Title>
      <Grid container spacing={3}>
        {gymData.map((gym) => <Grid item><GymCard gym={gym} key={`gym_${gym.namekey}`}/></Grid>)}
      </Grid>
    </>
  )
}
