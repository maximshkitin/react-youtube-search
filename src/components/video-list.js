import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({ videos, onVideoSelect }) => {

  const videoElements = videos.map((elem) => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        video={elem} key={elem.etag} />
    )
  });

  return(
    <ul className="video-list-container list-group col-md-4">
      {videoElements}
    </ul>
  )

};

export default VideoList;