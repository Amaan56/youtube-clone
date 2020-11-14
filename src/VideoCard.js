import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ thumbnail, avatar, title, creator, views, uploadDate }) {
  return (
    <div className="videocard">
      <img src={thumbnail} alt={title} className="videocard__thumbnail" />
      <div className="videocard__description">
        <Avatar className="videocard__avatar" src={avatar} alt={title} />
        <div className="videocard__info">
          <h4>{title}</h4>
          <p>{creator}</p>
          <p>
            {views} views • {uploadDate}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
