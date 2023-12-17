import { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");
  const [commentsData, setCommentsData] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false)
      const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const response = await data.json();
      setRedditData(response.data.children);
    };
    fetchData().then(setIsLoading(true)).catch(console.error);

  }, [subreddit]);
  console.log(redditData)


  // useEffect(() => {
  //   let isSubbed = true;
  //   const fetchData = async () => {
  //     const data = await fetch("https://www.reddit.com/subreddits.json");
  //     const response = await data.json();

  //     if (isSubbed) {
  //       setSubredditData(response);
  //     }
  //   };
  //   fetchData().catch(console.error);
  //   return () => (isSubbed = false);
  // }, []);

  console.log(subreddit);
  return (
    <div>
      <RedditClient redditData={redditData} setSubreddit={setSubreddit} isLoading={isLoading} />
    </div>
  );
}

export default App;
