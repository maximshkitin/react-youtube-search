import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('freeride');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {

    return (
      <div className="container app-container">
        <SearchBar onSearchTermChange={this.videoSearch.bind(this)} />
        <VideoDetail selectedVideo={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos}
                   onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } />
      </div>
    );
  }
}

export default App;
