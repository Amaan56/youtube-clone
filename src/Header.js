import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: '#5e5d5d' }} />
        <img
          className="header__leftLogo"
          src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png"
          alt="Youtube logo"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <Link to="/search/:key">
          <SearchIcon className="header__inputSearch" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar style={{ backgroundColor: 'orange' }}>A</Avatar>
      </div>
    </div>
  );
}

export default Header;
