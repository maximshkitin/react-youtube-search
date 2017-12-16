import React from 'react';

const VideoDetail = ({ selectedVideo }) => {

  console.log(selectedVideo);

  if (!selectedVideo) {
    return <div> Loading... </div>
  }

  const url = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div className="selected-video col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0"></iframe>
      </div>
      <h1 className="video-description">
        {selectedVideo.snippet.title}
      </h1>
    </div>
  )
};

export default VideoDetail;