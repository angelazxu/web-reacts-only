import React from "react";
import TweetCard from "./TweetCard.jsx";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.tweets.map(tweet => (
          <TweetCard tweet={tweet} />
        ))}
      </ul>
    );
  }
}

export default MainPage;
