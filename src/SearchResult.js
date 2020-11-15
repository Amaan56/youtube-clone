import React from 'react';
import './SearchResult.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

function SearchResult() {
  return (
    <div className="searchresult">
      <div className="searchresult__filter">
        <FilterListIcon className="searchresult__filterIcon" />
        <h4>FILTER</h4>
      </div>
      <hr />
      <div className="searchresult_channelInfo">
        <img
          src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="Clever Qazi"
        />
        <div className="searchresult_channelDescription">
          <div className="searchresult_channelTitle">
            <h4>Clever Programmer</h4>
            <VerifiedUserIcon />
          </div>
          <p>83K Subscribers • 490 videos</p>
          <p>
            You can find awesome programming lessons here! Also, expect
            programming tips and tricks that will take your coding skills to the
            ...
          </p>
        </div>
        <button>Subscribed</button>
        <NotificationsActiveIcon />
      </div>
      <hr />
    </div>
  );
}

export default SearchResult;
