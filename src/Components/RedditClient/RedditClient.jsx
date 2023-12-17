import Navigation from "../Navigation/Navigation";
import Storylist from "../Storylist/Storylist";
import Subreddits from "../Subreddits/Subreddits";
import './RedditClient.css'

const RedditClient = ({redditData}) => {
  return (
    <div>
      <Navigation />
      <div className="container">
      {!!redditData && <Storylist redditData={redditData} />}
      <Subreddits />
      </div>
    </div>
  );
};

export default RedditClient;
