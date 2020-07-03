import React from 'react';
import clsx from 'clsx';
import { Page } from '../../common/types'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { PageMenu } from './PageMenu';
import { drawerWidth } from '../../common/constants';

type OwnProps = {
  page: Page
  toglePage: (page: Page) => void
  open: boolean
  handleDrawerClose: () => void
}

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export default function DrawerMenu(props: OwnProps) {
  const classes = useStyles();
  return(
    <Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, !props.open && classes.drawerPaperClose),
    }}
    open={props.open}
  >
    <div className={classes.toolbarIcon}>
      <IconButton onClick={props.handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <PageMenu page={props.page} toglePage={props.toglePage}/>
    <Divider />
  </Drawer>
  )
  
}