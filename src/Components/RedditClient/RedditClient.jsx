import Navigation from "../Navigation/Navigation";
import Storylist from "../Storylist/Storylist";
import Subreddits from "../Subreddits/Subreddits";
import './RedditClient.css'

const RedditClient = ({redditData, setSubreddit, isLoading}) => {

  // let storylist
  // if (isLoading){
  //   storylist = <Storylist redditData={redditData} />
  // } else {
  //   storylist = <p>Loading posts...</p>
  // }
  
  return (
    <div>
      <Navigation />
      <div className="container">
      <Storylist redditData={redditData} />
      <Subreddits setSubreddit={setSubreddit} />
      </div>
    </div>
  );
};

export default RedditClient;
