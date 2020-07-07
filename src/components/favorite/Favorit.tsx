import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import { DataPageProps } from '../../common/types';
import GymCard from '../common/GymCard';
import { cookieKey } from '../../common/constants';

const useStyles = makeStyles((theme) => ({
  wardsWrap: {
    padding: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  chip: {
    margin: 3
  },
  gymItems: {
    justifyContent: 'space-around'
  }
}));


export const Favorite = (props: DataPageProps) => {
  const classes = useStyles();
  const gymItems = props.gymData;
  const cookieValue = props.cookie[cookieKey];
  const gyms = Array.isArray(cookieValue) ? gymItems.filter((gym) => cookieValue.includes(gym.namekey)): [];
  return (
    <>
      <Title>お気に入りジム</Title>
      <Grid container spacing={3} className={classes.gymItems}>
        {gyms.sort((a, b) => b.score - a.score).map((gym) =>
          <Grid item key={`favorite_gym_${gym.namekey}`}>
            <GymCard gym={gym} cookie={props.cookie} handleCookie={props.handleCookie} />
          </Grid>        
        )}
      </Grid>
    </>
  )
}
