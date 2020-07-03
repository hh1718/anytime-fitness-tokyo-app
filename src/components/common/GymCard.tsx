import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import { GymData } from '../../common/types';
import { wards } from '../../data/area';
import { getUrl } from '../../data/gymData';
import { getAvatarColor } from '../../common/util';

const useStyles = (avatorColor: string) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 310,
      textAlign: 'left'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: avatorColor,
    },
    cardItem: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    hidden: {
      visibility: 'hidden',
      padding: '0',
      height: '0'
    }
  }),
);

type OwnProps = {
  gym: GymData
}

export default function GymCard(props: OwnProps) {
  const gym = props.gym
  const classes = useStyles(getAvatarColor(gym.rank))();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="gym_rank" className={classes.avatar}>
            {gym.rank}
          </Avatar>
        }
        /*action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }*/
        title={<Link  href={getUrl(gym.namekey)} target="_blank" rel="noopener" >{`${gym.name}店 (${wards[gym.area as keyof any]})`}</Link>}
        subheader={gym.score}
      />
      <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent className={classes.hidden}>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>*/}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Divider />
        　<Typography className={classes.cardItem}>
            最寄駅:
            <span>
            {gym.station.map((s) =>
              <Link href={s.rentvalueUrl} target="_blank" rel="noopener" key={`${gym.namekey}_${s.name}`}>
                {s.name}
              </Link>,
            )}
            </span>
          </Typography>
          <Divider />
          <Typography className={classes.cardItem}>
            パワーラック: <span>{gym.powerRack}</span>
          </Typography>
          <Divider />
          <Typography className={classes.cardItem}>
            スミスマシン: <span>{gym.smithM}</span>
          </Typography>
          <Divider />
          <Typography className={classes.cardItem}>
            ダンベル: <span>{gym.dumbbell}</span>
          </Typography>
          <Divider />
          <Typography className={classes.cardItem}>
            45度レッグプレス: <span>{gym.legPress ? 'あり' : ''}</span>
          </Typography>
          <Divider />
          <Typography className={classes.cardItem}>
            給水器: <span>{gym.water ? 'あり' : ''}</span>
          </Typography>
          <Divider />
          <Typography paragraph>コメント:</Typography>
          <Typography paragraph>{gym.commnet}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}