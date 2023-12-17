import { useEffect, useState, useLayoutEffect } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [subredditData, setSubredditData] = useState({});
  const [commentsData, setCommentsData] = useState({});

  useEffect(() => {
    let isSubbed = true;
    const fetchData = async () => {
      const data = await fetch("https://www.reddit.com/r/popular.json");
      const response = await data.json();
      console.log(response);
      if (isSubbed) {
        setRedditData(response.data.children);
      }
    };
    fetchData().catch(console.error);

    return () => (isSubbed = false);
  }, []);

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



  console.log(redditData);
  return (
    <div>
      <RedditClient redditData={redditData} />
    </div>
  );
}

export default App;
