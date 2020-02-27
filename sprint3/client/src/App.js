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
    axios.get("/videos/").then(response => {
      this.setState({ videoList: response.data });
      this.getMainVideo();
    });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.mainVideoId !== this.state.mainVideoId) {
      this.getMainVideo();
    }
  }

  getMainVideo = () => {
    axios.get(`/videos/${this.state.mainVideoId}`).then(response => {
      const mainVideo = response.data[0];
      this.setState({ mainVideo });
      this.setState({ commentCount: mainVideo.comments.length });
      this.setState({ comments: mainVideo.comments });
    });
  };

  uploadHandler() {}

  eventHandler = event => {
    event.preventDefault();
    const comments = event.target.commentInput.value;
    if (comments !== "") {
      axios
        .post(`/videos/${this.state.mainVideoId}`, {
          comment: comments,
          name: "Daniel Kim"
        })
        .then(response => {
          this.getMainVideo();
        });
      event.target.reset();
    } else {
      window.alert("Please type comments");
    }
  };

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
                  <Upload getMainVideo={this.getMainVideo} />
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
                      <Conversation
                        commentCount={this.state.commentCount}
                        onSubmit={this.eventHandler}
                      />
                      <Comments
                        comments={this.state.comments}
                        mainVideoId={this.state.mainVideoId}
                        deleteHandler={this.getMainVideo}
                      />
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
                      <Conversation
                        commentCount={this.state.commentCount}
                        onSubmit={this.eventHandler}
                      />
                      <Comments
                        comments={this.state.comments}
                        mainVideoId={this.state.mainVideoId}
                        deleteHandler={this.getMainVideo}
                      />
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
