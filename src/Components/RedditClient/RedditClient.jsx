import Navigation from "../Navigation/Navigation";
import Storylist from "../Storylist/Storylist";
import Subreddits from "../Subreddits/Subreddits";
import './RedditClient.css'

const RedditClient = ({redditData, setSubreddit, setRedditData}) => {

  // let storylist
  // if (isLoading){
  //   storylist = <Storylist redditData={redditData} />
  // } else {
  //   storylist = <p>Loading posts...</p>
  // }
  
  return (
    <div className="">
        <Navigation setRedditData={setRedditData} setSubreddit={setSubreddit} />
      <div className="flex">
      <Storylist redditData={redditData} />
      <Subreddits setSubreddit={setSubreddit} />
      </div>
    </div>
  );
};

export default RedditClient;
