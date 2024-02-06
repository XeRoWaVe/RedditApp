import Navigation from "../Navigation/Navigation";
import Storylist from "../Storylist/Storylist";

const RedditClient = ({
  redditData,
  setSubreddit,
  setRedditData,
  subreddit,
}) => {
  return (
    <div className="">
      <Navigation setRedditData={setRedditData} setSubreddit={setSubreddit} subreddit={subreddit} />
      <h1 className="shadow-insetShadow w-fit m-auto font-bold size-40 h-fit tracking-tight">
        {subreddit}
      </h1>
      <Storylist redditData={redditData} />
    </div>
  );
};

export default RedditClient;
