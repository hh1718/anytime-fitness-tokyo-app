import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { wards } from '../../data/area';
import { DataProps } from '../../common/types';
import GymCard from '../common/GymCard';

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

export const Area = (props: DataProps) => {
  const classes = useStyles();
  const [area, setArea] = React.useState<string>('');
  const showGymItems = area !== ''
  const gymItems = props.gymData
  return (
    <>
      <Title>東京23区</Title>
      <div className={classes.wardsWrap}>
        {Object.keys(wards).map((k) => (
          <Chip
            size="small"
            label={wards[k]}
            key={`area_${k}`}
            className={classes.chip}
            clickable
            onClick={() => setArea(k)}
          />
        ))}
      </div>
      {showGymItems
        ? (
            <Grid container spacing={3} className={classes.gymItems}>
              {gymItems.filter((gym) => gym.area === area).map((gym) =>
                <Grid item key={`area_gym_${gym.namekey}`}>
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
