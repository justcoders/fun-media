import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
// import { Link } from 'react-router-dom';
import './Header.css';
import { APP_TITLE } from '../../constants';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const RightMenu = (props) => (
  <IconMenu
    {...props}
    onChange={props.onChange}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem value="/profile" primaryText="Profile"/>
    <MenuItem value="/ping" primaryText="Ping"/>
    <MenuItem value="logout" primaryText="Sign out"/>
  </IconMenu>
);

class Header extends Component {
  onMenuChange(event, route){
      if(route === 'logout'){
        this.props.auth.logout()
      } else {
        this.props.history.replace(`${route}`)
      }
  }
  render() {
    return (
      <div>
        <AppBar
          title={APP_TITLE}
          iconElementRight={<RightMenu onChange={this.onMenuChange.bind(this)} />}
        />
      </div>
    );
  }
}

export default Header;