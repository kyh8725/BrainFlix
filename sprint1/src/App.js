import React from "react";
import Header from "./scripts/header";
import Comments from "./scripts/comments";
import Conversation from "./scripts/conversation";
import Video from "./scripts/video";
import VideoInfo from "./scripts/videoInfo";
import VideoList from "./scripts/videoList";
import "./styles/main.css";
import VideoControls from "./scripts/videoControls";
//import axios from "axios";

// //comment data
const comments = [
  {
    name: "Micheal Lyons",
    date: "1545120000000",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
    img: "/Images/face0.png"
  },
  {
    name: "Gary Wong",
    date: "1545120000000",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
    img: "/Images/face1.png"
  },
  {
    name: "Theodore Duncan",
    date: "1542268800000",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
    img: "/Images/face2.png"
  }
];

// Side Video Object
const sideVideos = [
  {
    id: "video1",
    title: "Become A Travel Pro In One Easy Lesson",
    channel: "Todd Welch",
    image: "/Images/video-list-1.jpg"
  },
  {
    id: "video2",
    title: "Les Houches The Hidden Gem Of The Chamonix",
    channel: "Cornelia Blair",
    image: "/Images/video-list-2.jpg"
  },
  {
    id: "video3",
    title: "Travel Health Useful Medical Information For",
    channel: "Glen Harper",
    image: "/Images/video-list-3.jpg"
  },
  {
    id: "video4",
    title: "Cheap Airline Tickets Great Ways To Save",
    channel: "Emily Harper",
    image: "/Images/video-list-4.jpg"
  },
  {
    id: "video5",
    title: "Take A Romantic Break In A Boutique Hotel",
    channel: "Ethan Owen",
    image: "/Images/video-list-5.jpg"
  },
  {
    id: "video6",
    title: "Choose The Perfect Accommodations",
    channel: "Lydia Perez",
    image: "/Images/video-list-6.jpg"
  },
  {
    id: "video7",
    title: "Cruising Destination Ideas",
    channel: "Timothy Austin",
    image: "/Images/video-list-7.jpg"
  },
  {
    id: "video8",
    title: "Train Travel On Track For Safety",
    channel: "Scotty Cranmer",
    image: "/Images/video-list-8.jpg"
  }
];

//Main Video Object
const mainVideo = {
  id: "id type of string",
  title: "BMX Rampage: 2018 Highlights",
  description:
    "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  channel: "By Red Cow",
  image: "/Images/video-list-0.jpg",
  views: "1,001,023",
  likes: "110,985",
  duration: "42",
  video: "/Images/video-list-0.jpg",
  timestamp: "1545120000000",
  comments: "[]"
};
class App extends React.Component {
  state = {
    commentCount: comments.length
    //comments: [],
    //userName: "Daniel Kim"
  };

  // componentDidMount() {
  //   axios
  //     .get("https://project-1-api.herokuapp.com/comments?api_key=Daniel")
  //     .then(response => {
  //       this.setState({ comments: response.data });
  //     });
  // }

  clickHandler = event => {
    event.preventDefault();

    // let newComment = event.target.input.value;
    // if (newComment !== "") {
    //   axios
    //     .post("https://project-1-api.herokuapp.com/comments?api_key=Daniel", {
    //       name: this.state.userName,
    //       comment: newComment
    //     })
    //     .then(response => {
    //       console.log(response.data);
    //       this.setState({ comments: response.data });
    //     });
    // } else {
    //   window.alert("Please write your comments");
    // }

    /**
     * create a new comment object and put it into the comment array.
     * clear the comment input and update the state.commentNumber
     */
    const newComments = event.target.input.value;
    if (newComments !== "") {
      const newCommentObject = {
        name: "Daniel Kim",
        date: JSON.stringify(new Date().getTime()),
        comment: newComments,
        img: "/Images/face.png"
      };
      comments.unshift(newCommentObject);
      event.target.reset();
      this.setState({ commentCount: comments.length });
    } else {
      window.alert("Please write your comments");
    }
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <div className="mainVideo-container">
            <Video mainVideo={mainVideo} />
            <VideoControls mainVideo={mainVideo} />
          </div>
          <div className="desktop-view">
            <div className="desktop-view__left">
              <VideoInfo mainVideo={mainVideo} />
              <Conversation
                count={this.state.commentCount}
                onSubmit={this.clickHandler}
              />
              <Comments comments={comments} />
            </div>
            <div className="desktop-view__right">
              <VideoList videoList={sideVideos} />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
