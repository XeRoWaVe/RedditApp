import { useEffect, useState, useCallback } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const response = await data.json();
    setRedditData(await response.data.children);
  });

  useEffect(() => {
    fetchData().then(setIsLoading(false)).catch(console.error);
  }, [subreddit]);

  return (
    <RedditClient
      subreddit={subreddit}
      redditData={redditData}
      setSubreddit={setSubreddit}
      isLoading={isLoading}
      setRedditData={setRedditData}
    />
  );
}

export default App;
