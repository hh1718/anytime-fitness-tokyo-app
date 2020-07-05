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

const defaultAreaDisp = '東京23区'

export const Area = (props: DataProps) => {
  const classes = useStyles();
  const [area, setArea] = React.useState<string>('');
  const selectedArea = area === '' ? props.routerProps.match.params.id || area : area
  const showGymItems = selectedArea !== ''
  const gymItems = props.gymData
  return (
    <>
      <Title>
        {selectedArea !== ''  && wards[selectedArea] !== undefined ? wards[selectedArea] : defaultAreaDisp}
      </Title>
      <div className={classes.wardsWrap}>
        {Object.keys(wards).map((k) => (
          <Chip
            size="small"
            label={wards[k]}
            key={`area_${k}`}
            className={classes.chip}
            clickable
            onClick={() => {
              setArea(k)
              props.routerProps.history.push(`/area/${k}`)
            }}
          />
        ))}
      </div>
      {showGymItems
        ? (
            <Grid container spacing={3} className={classes.gymItems}>
              {gymItems.filter((gym) => gym.area === selectedArea).map((gym) =>
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
