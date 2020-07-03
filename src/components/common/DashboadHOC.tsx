import React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import { Page, GymData } from '../../common/types'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Header from './Header'
import DrawerMenu from './DrawerMenu'
import { Area } from '../area/Area';
import { Ranking } from '../ranking/Ranking';
import { Top } from '../top/Top';
import { Train } from '../train/Train';
import { drawerWidth } from '../../common/constants';
import { StaticContext, } from 'react-router';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c'
    },
    secondary: {
      main: '#304ffe'
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
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
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    padding: `${theme.spacing(2)}px 0`,
  },
  fixedHeight: {
    height: 240,
  },
}));

type OwnProps = {
  gymData: GymData[]
  routerProps: RouteComponentProps<any, StaticContext, any>
}

type DataProps = {
  gymData: GymData[]
}

const DashboardHOC = (PageComponent: React.ComponentType<DataProps>) => {
  // ここでconstにして型を定義しないと以下のエラー
  // HOC React Hook "useStyles" cannot be called inside a callback.
  // React Hooks must be called in a React function component or a custom React Hook function
  const Dashboard: React.FC<OwnProps> = (props: OwnProps) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const togleTab = (page: Page) => {
      console.log(props.routerProps)
      props.routerProps.history.push(page)
    }
    const pageStrArray = props.routerProps.match.url.split('/')
    const page = pageStrArray.length > 0 ? pageStrArray[1] as Page : ''

    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header open={open} handleDrawerOpen={handleDrawerOpen}/>
          <DrawerMenu 
            page={page}
            toglePage={togleTab}
            open={open}
            handleDrawerClose={handleDrawerClose}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <PageComponent gymData={props.gymData} />
            </Container>
          </main>
        </ThemeProvider>
      </div>
    );
  }

  return Dashboard
}

export const TopPage = DashboardHOC(Top)

export const RankingPage = DashboardHOC(Ranking)

export const TrainLinePage = DashboardHOC(Train)

export const AreaPage = DashboardHOC(Area)