import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { trainLines } from '../../data/trainLines';
import { DataProps } from '../../common/types';
import GymCard from '../common/GymCard';

const useStyles = makeStyles((theme) => ({
  trainsWrap: {
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

export const Train = (props: DataProps) => {
  const classes = useStyles();
  const [line, setLine] = React.useState<string>('');
  const showGymItems = line !== ''
  const gymItems = props.gymData
  return (
    <>
      <Title>路線</Title>
      <div className={classes.trainsWrap}>
        {Object.keys(trainLines).map((k) => (
          <Chip
            size="small"
            label={trainLines[k as keyof any]}
            key={`train_${k}`}
            className={classes.chip}
            clickable
            onClick={() => setLine(k)}
          />
        ))}
      </div>
      {showGymItems
        ? (
            <Grid container spacing={3} className={classes.gymItems}>
              {gymItems.filter((gym) => gym.station.some((s) => s.lines.includes(line))).map((gym) =>
                <Grid item key={`line_gym_${gym.namekey}`}>
                  <GymCard gym={gym} />
                </Grid>        
              )}
            </Grid>
          )
        : null
      }
    </>
  )
}
