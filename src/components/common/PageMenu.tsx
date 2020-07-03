import React from 'react';
import { Page } from '../../common/types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import PeopleIcon from '@material-ui/icons/People';
import SubwayIcon from '@material-ui/icons/Subway';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import List from '@material-ui/core/List';

interface Ownprops {
  page: Page
  toglePage: (page: Page) => void
}

export const PageMenu = (props: Ownprops) => (
  <List>
    <div>
        <ListItem button onClick={() => props.toglePage('top')} selected={props.page === 'top' || props.page === ''}> 
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="当サイトについて" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('ranking')} selected={props.page === 'ranking'}>
        <ListItemIcon>
            <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText primary="ランキング" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('area')} selected={props.page === 'area'}>
        <ListItemIcon>
            <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary="市区" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('train')} selected={props.page === 'train'}>
        <ListItemIcon>
            <SubwayIcon />
        </ListItemIcon>
        <ListItemText primary="沿線" />
        </ListItem>
        {/*<ListItem button>
        <ListItemIcon>
            <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="ユーザー" />
        </ListItem>*/}
    </div>
  </List>
);