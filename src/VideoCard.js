import React from 'react';
import { Avatar } from '@mui/material';
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className='VideoCard'>
      <img className="VideoCard__thumbnail" src={image} alt=""/>
      <div className='VideoCard__Info'>
        <Avatar className='VideoCard__avatar' alt={channel} src={channelImage} />
        <div className='Video__Text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

