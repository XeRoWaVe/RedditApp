import Navigation from "../Navigation/Navigation";
import Storylist from "../Storylist/Storylist";

const RedditClient = ({ redditData, setSubreddit, setRedditData, subreddit }) => {
  // let storylist
  // if (isLoading){
  //   storylist = <Storylist redditData={redditData} />
  // } else {
  //   storylist = <p>Loading posts...</p>
  // }

  return (
    <div className="">
      <Navigation setRedditData={setRedditData} setSubreddit={setSubreddit} />
      <h1 className="shadow-insetShadow w-fit m-auto font-bold size-40 h-fit tracking-tight">{subreddit}</h1>
      <Storylist redditData={redditData} />
    </div>
  );
};

export default RedditClient;


