import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {

  return(
    <li className="video-list-item list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url} alt=""/>
        </div>
        <div className="media-body">
          <p className="media-heading">
            {video.snippet.title}
          </p>
        </div>
      </div>
    </li>
  )

};

export default VideoListItem;