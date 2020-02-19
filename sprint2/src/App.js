import React, { Component } from "react";
import Header from "./components/header";
import Comments from "./components/comments";
import Conversation from "./components/conversation";
import Video from "./components/video";
import VideoInfo from "./components/videoInfo";
import VideoList from "./components/videoList";
import VideoControls from "./components/videoControls";
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
    });
    axios.get(`${$url}${this.state.mainVideoId}${$key}`).then(response => {
      const mainVideo = response.data;
      this.setState({ mainVideo });
      this.setState({ commentCount: mainVideo.comments.length });
      this.setState({ comments: mainVideo.comments });
    });
  }

  componentDidUpdate(prevProp, prevState) {
    console.log("in did update ", prevState.mainVideoId);
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
            path="/"
            exact
            render={() => {
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
            path="/:id"
            render={props => {
              if (props.match.params.id !== this.state.mainVideoId) {
                this.setState({ mainVideoId: props.match.params.id });
                //console.log(props.match.params.id);
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

/**
 * Functional Requirements
Clicking the BrainFlix Logo must link back to the home page.
There must be 3 routes:
The Home/Video Player Page for displaying the details of a video.
The Video Upload Page.
A route which will load the video with the provided video id to be displayed using the Video Player Page.
Clicking on a video in the “Next Video” list must go to the Video Details Page for the selected video and display all the information for the video such as (likes, views, author, etc).
Clicking on the “Upload” button must link to the Video Upload Page.


const Home = () => <h1>Home</h1>;
const Images = props => {
  const images = props.images.map(image => (
    <Link to={`images/${image.id}`} key={image.id}>
      <img src={image.url} alt={image.title} />
    </Link>
  ));
  return images;
};
const ImageDetails = props => (
  <div>
    <img src={props.url} alt={props.title} />
    <h2>{props.title}</h2>
  </div>
);

class App extends Component {
  state = {
    images: [
      {
        id: "1",
        title: "Image 1",
        url: "https://i.picsum.photos/id/237/200/300.jpg"
      },
      {
        id: "2",
        title: "Image 2",
        url: "https://i.picsum.photos/id/238/200/300.jpg"
      },
      {
        id: "3",
        title: "Image 3",
        url: "https://i.picsum.photos/id/239/200/300.jpg"
      }
    ]
  };
  render() {
    return (
      <Router>
        <Link to="/images">Images</Link>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route
            path="/images"
            exact
            render={() => <Images images={this.state.images} />}
          />
          <Route
            path="/images/:id"
            render={props => {
              const image = this.state.images.find(image => {
                return props.match.params.id === image.id;
              });
              return <ImageDetails title={image.title} url={image.url} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;


 */
