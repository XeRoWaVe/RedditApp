import { useEffect, useState, useCallback } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = useCallback(async () => {
  //     setIsLoading(true);
  //     const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  //     const response = await data.json();
  //     setRedditData(await response.data.children);

  //   fetchData().then(setIsLoading(false)).catch(console.error)));
  // }, [subreddit]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const response = await data.json();
    setRedditData(await response.data.children);
  });

  useEffect(() => {
    fetchData().then(setIsLoading(false)).catch(console.error);
  }, [subreddit]);

  console.log(redditData);
  // useEffect(()=>{
  //   const fetchData = useCallback(async () => {
  //     setIsLoading(true);
  //     const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  //     const response = await data.json();
  //     setRedditData(await response.data.children);
  //   }
  // )
  // fetchData().then(setIsLoading(false)).catch(console.error)
  // }, [subreddit]);
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
