import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from '../common/Title';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { wards } from '../../data/area';
import { DataPageProps } from '../../common/types';
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

const defaultAreaDisp = '東京23区別ジム検索'

export const Area = (props: DataPageProps) => {
  const classes = useStyles();
  const [area, setArea] = React.useState<string>('');
  const selectedArea = area === '' ? props.routerProps.match.params.id || area : area
  const showGymItems = selectedArea !== ''
  const gymItems = props.gymData
  return (
    <>
      <Title>
        {selectedArea !== ''  && wards[selectedArea] !== undefined ? `${wards[selectedArea]}のジム` : defaultAreaDisp}
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
              {gymItems.filter((gym) => gym.area === selectedArea).sort((a, b) => b.score - a.score).map((gym) =>
                <Grid item key={`area_gym_${gym.namekey}`}>
                  <GymCard gym={gym} cookie={props.cookie} handleCookie={props.handleCookie} />
                </Grid>        
              )}
            </Grid>
          )
        : null
      }
    </>
  )
}
