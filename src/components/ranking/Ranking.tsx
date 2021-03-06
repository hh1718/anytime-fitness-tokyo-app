import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import GymCard from '../common/GymCard';
import { GymData, DataPageProps } from '../../common/types';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    // backgroundColor: '#eaedf7'
  },
  item: {
    display: 'flex',
    overflow: 'auto',
    justifyContent: 'space-between',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: 10
  },
  rankingItem: {
    justifyContent: 'space-around'
  }
}));

export const Ranking = (props: DataPageProps) => {
  const gymData = props.gymData;
  const classes = useStyles();
  const items = toptenItem(gymData);

  return (
    <>
      <Title>ジムランキング</Title>
      <Grid container spacing={1}>
          <Grid item xs={12}>
          {items.map((rankItem) => 
            <div className={classes.paper} key={`ranking_${rankItem.rank}`}>
              <Avatar aria-label="gym_rank" className={classes.avatar}>
                {rankItem.rank}
              </Avatar>
              <Grid container spacing={3} className={classes.rankingItem}>
              {rankItem.items.map((gym: GymData) =>
                <Grid item key={`gym_${gym.namekey}`} className={classes.item}>
                  <GymCard gym={gym}  cookie={props.cookie} handleCookie={props.handleCookie} />
                </Grid>
              )}
              </Grid>
            </div>
          )}
          </Grid>
      </Grid>
      {/*<Grid container spacing={3}>
        {gymData.map((gym) => <Grid item key={`gym_${gym.namekey}`} className={classes.item}><GymCard gym={gym}/></Grid>)}
  </Grid>*/}
    </>
  )
}

const getTopTenScore = (data: GymData[]) => data.map((gym) => gym.score)
  .sort((a, b) => b - a)
  .slice(0, 20)
  .filter((score, i, self) => self.indexOf(score) === i)

const toptenItem = (data: GymData[]) => {
  const topTenScore = getTopTenScore(data)
  const minScore = Math.min(...topTenScore)
  const targetItems = data.filter((gym) => gym.score >= minScore).sort((a, b) => b.score - a.score)
  return topTenScore.map((score) => ({
    rank: topTenScore.indexOf(score) + 1,
    score: score,
    items: targetItems.filter((gym) => gym.score === score)
  }))
}
