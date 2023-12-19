import { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";


function App() {
  const [redditData, setRedditData] = useState([]);
  const [subreddit, setSubreddit] = useState("popular");
  const [commentsData, setCommentsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
      const response = await data.json();
      setRedditData(await response.data.children);
    };
    fetchData().then(setIsLoading(false)).catch(console.error);
  }, [subreddit]);
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
  console.log(redditData)
  return (
    <div className="">
      <RedditClient
        redditData={redditData}
        setSubreddit={setSubreddit}
        isLoading={isLoading}
        setRedditData={setRedditData}
      />
    </div>
  );
}

export default App;
