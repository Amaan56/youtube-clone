import React from 'react';
import './SearchResultRow.css';
import Avatar from '@material-ui/core/Avatar';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function SearchResultRow({
  image,
  avatar,
  title,
  views,
  uploadDate,
  creator,
  videoDescription,
}) {
  return (
    <div className="searchresultrow">
      <img src={image} alt={title} />
      <div className="searchresultrow__info">
        <h4>{title}</h4>
        <p>
          {views} • {uploadDate}
        </p>
        <div className="searchresultrow__avatar">
          <Avatar src={avatar} alt={title} className="avatarIcon" />
          <h4>{creator}</h4>
          <VerifiedUserIcon />
        </div>
        <p>{videoDescription}</p>
        <a>New</a>
      </div>
    </div>
  );
}

export default SearchResultRow;
