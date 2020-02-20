import React, { Component } from "react";
import Header from "./components/header";
import Comments from "./components/comments";
import Conversation from "./components/conversation";
import Video from "./components/video";
import VideoInfo from "./components/videoInfo";
import VideoList from "./components/videoList";
import VideoControls from "./components/videoControls";
import Upload from "./components/upload";
import axios from "axios";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const $url = "https://project-2-api.herokuapp.com/videos/";
const $key = "?api_key=Daniel";
const $homeKey = "1af0jruup5gu";

class App extends Component {
  state = {
    videoList: [],
    mainVideo: {},
    commentCount: 0,
    comments: [],
    mainVideoId: $homeKey
  };

  componentDidMount() {
    axios.get($url + $key).then(response => {
      this.setState({ videoList: response.data });
      axios.get(`${$url}${$homeKey}${$key}`).then(response => {
        const mainVideo = response.data;
        this.setState({ mainVideo });
        this.setState({ commentCount: mainVideo.comments.length });
        this.setState({ comments: mainVideo.comments });
      });
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.mainVideoId !== this.state.mainVideoId) {
      axios.get(`${$url}${this.state.mainVideoId}${$key}`).then(response => {
        const mainVideo = response.data;
        this.setState({ mainVideo });
        this.setState({ commentCount: mainVideo.comments.length });
        this.setState({ comments: mainVideo.comments });
      });
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route
            path="/upload"
            render={() => {
              return (
                <main>
                  <Upload />
                </main>
              );
            }}
          />
          <Route
            path="/:id"
            render={props => {
              if (props.match.params.id !== this.state.mainVideoId) {
                this.setState({ mainVideoId: props.match.params.id });
              }
              return (
                <main>
                  <div className="mainVideo-container">
                    <Video mainVideo={this.state.mainVideo} />
                    <VideoControls mainVideo={this.state.mainVideo} />
                  </div>
                  <div className="desktop-view">
                    <div className="desktop-view__left">
                      <VideoInfo mainVideo={this.state.mainVideo} />
                      <Conversation commentCount={this.state.commentCount} />
                      <Comments comments={this.state.comments} />
                    </div>
                    <div className="desktop-view__right">
                      <VideoList
                        videoList={this.state.videoList}
                        mainVideoId={this.state.mainVideoId}
                      />
                    </div>
                  </div>
                </main>
              );
            }}
          />
          <Route
            path="/"
            exact
            render={() => {
              if ($homeKey !== this.state.mainVideoId) {
                this.setState({ mainVideoId: $homeKey });
              }
              return (
                <main>
                  <div className="mainVideo-container">
                    <Video mainVideo={this.state.mainVideo} />
                    <VideoControls mainVideo={this.state.mainVideo} />
                  </div>
                  <div className="desktop-view">
                    <div className="desktop-view__left">
                      <VideoInfo mainVideo={this.state.mainVideo} />
                      <Conversation commentCount={this.state.commentCount} />
                      <Comments comments={this.state.comments} />
                    </div>
                    <div className="desktop-view__right">
                      <VideoList
                        videoList={this.state.videoList}
                        mainVideoId={this.state.mainVideoId}
                      />
                    </div>
                  </div>
                </main>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}
export default App;
