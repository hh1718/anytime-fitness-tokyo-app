import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import { trainLines } from '../../data/trainLines';
import { DataPageProps } from '../../common/types';
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

const defaultTrainDisp = '路線検索'

export const Train = (props: DataPageProps) => {
  const classes = useStyles();
  const [line, setLine] = React.useState<string>('');
  const selectedLine = line === '' ? props.routerProps.match.params.id || line : line
  const showGymItems = selectedLine !== ''
  const gymItems = props.gymData
  return (
    <>
      <Title>
        {selectedLine !== '' && trainLines[selectedLine] !== undefined ? trainLines[selectedLine] : defaultTrainDisp}
      </Title>
      <div className={classes.trainsWrap}>
        {Object.keys(trainLines).map((k) => (
          <Chip
            size="small"
            label={trainLines[k as keyof any]}
            key={`train_${k}`}
            className={classes.chip}
            clickable
            onClick={() => {
              setLine(k)
              props.routerProps.history.push(`/train/${k}`)
            }}
          />
        ))}
      </div>
      {showGymItems
        ? (
            <Grid container spacing={3} className={classes.gymItems}>
              {gymItems.filter((gym) => gym.station.some((s) => s.lines.includes(selectedLine))).sort((a, b) => b.score - a.score).map((gym) =>
                <Grid item key={`line_gym_${gym.namekey}`}>
                  <GymCard gym={gym} cookie={props.cookie} handleCookie={props.handleCookie}/>
                </Grid>        
              )}
            </Grid>
          )
        : null
      }
    </>
  )
}
