import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import TheatersIcon from '@material-ui/icons/Theaters';
import WatchLaterIcon from '@material-ui/icons/WatchLater';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOption text="Home" active Icon={HomeIcon} />
      <SidebarOption text="Trending" Icon={WhatshotIcon} />
      <SidebarOption text="Subscription" Icon={SubscriptionsIcon} />
      <hr />
      <SidebarOption text="Library" Icon={LibraryBooksIcon} />
      <SidebarOption text="History" Icon={HistoryIcon} />
      <SidebarOption text="Your Videos" Icon={VideoLibraryIcon} />
      <SidebarOption text="Your movies" Icon={TheatersIcon} />
      <SidebarOption text="Watch Later" Icon={WatchLaterIcon} />
    </div>
  );
}

export default Sidebar;
