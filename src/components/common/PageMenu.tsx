import React from 'react';
import { Page } from '../../common/types'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import PeopleIcon from '@material-ui/icons/People';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SubwayIcon from '@material-ui/icons/Subway';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PolicyIcon from '@material-ui/icons/Policy';
import List from '@material-ui/core/List';
import RoomIcon from '@material-ui/icons/Room';

interface Ownprops {
  page: Page
  toglePage: (page: Page) => void
}

export const PageMenu = (props: Ownprops) => (
  <List>
    <div>
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
          <ListItemText primary="東京23区" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('train')} selected={props.page === 'train'}>
          <ListItemIcon>
              <SubwayIcon />
          </ListItemIcon>
          <ListItemText primary="沿線" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('favorite')} selected={props.page === 'favorite'}>
          <ListItemIcon>
              <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary="お気に入り" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('map')} selected={props.page === 'map'}>
          <ListItemIcon>
              <RoomIcon />
          </ListItemIcon>
          <ListItemText primary="マップ" />
        </ListItem>
        <ListItem button onClick={() => props.toglePage('about')} selected={props.page === 'about' || props.page === ''}> 
          <ListItemIcon>
              <PolicyIcon />
          </ListItemIcon>
          <ListItemText primary="当サイトについて" />
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