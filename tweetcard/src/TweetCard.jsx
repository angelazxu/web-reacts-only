import React from "react";
import Icon from "./Icon";

const TweetCard = props => {
  //render verified icon
  function renderVerified() {
    //TODO (TASK 1): render icon only if user is verified.
    //Call this function in renderHeader().
    if (props.tweet.verified) {
      return <Icon type={"verified"} />;
    }
  }

  //Header should contain avatar, name, username, and verified.
  function renderHeader() {
    //TODO (TASK 1): REPLACE ALL CAPS
    //1. Pass in avatar link as props for Image component.
    //2. Render the name and verified icon in the <h3> tags.
    //3. Render username.
    return (
      <div className="header">
        <img src={props.tweet.imageURL} />
        <div>
          <h3>
            {props.tweet.name} {renderVerified()}
          </h3>
          <div className="subtext">{props.tweet.username}</div>
        </div>
      </div>
    );
  }

  //Body should contain tweet and timestamp.
  function renderBody() {
    //TODO (TASK 2): REPLACE ALL CAPS
    return (
      <div>
        <h2>{props.tweet.tweet}</h2>
        <div className="subtext">{props.tweet.timestamp}</div>
      </div>
    );
  }

  //Numbers should contain number of retweets and number of likes.
  function renderNumbers() {
    //TODO (TASK 3): Add retweets and likes in here!
    return (
      <div className="numbers">
        <h3>{props.tweet.likes}</h3>
        <div class="subtext">Likes</div>
        <h3>{props.tweet.retweets}</h3>
        <div class="subtext">Retweets</div>
      </div>
    );
  }

  //Rounds a number to the nearest thousand.
  function roundToNearestThousand(value) {
    return null; //DELETE ME
  }

  //Summary should contain number of retweets and number of likes.
  function renderSummary() {
    //TODO (TASK 4): Render Retweets and Likes
    return (
      <div className="summary">
        <div className="subtext">
          <Icon type={"rt"} />
          <div>{props.tweet.retweets}</div>
        </div>
        <div className="subtext">
          <Icon type={"like"} />
          <div>{props.tweet.likes}</div>
        </div>
      </div>
    );
  }

  // ----- DON'T MODIFY BELOW -----
  return (
    <div className="App">
      <div className="top">
        {renderHeader()}
        <img
          src="https://uploads.codesandbox.io/uploads/user/5f7bcfab-93b0-47d6-ab75-e5a4dd7d5661/UxP3-follow.png"
          height="45px"
        />
      </div>
      {renderBody()}
      <hr />
      {renderNumbers()}
      <hr />
      {renderSummary()}
    </div>
  );
};

export default TweetCard;
// ----- DON'T MODIFY ABOVE -----
