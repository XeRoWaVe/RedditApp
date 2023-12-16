import { useEffect, useState } from "react";
import "./App.css";
import RedditClient from "./Components/RedditClient/RedditClient";

function App() {
  // const [redditData, setRedditData] = useState({})

  // const fetchTest = async () => {
  //   try {
  //   const data = await fetch(`https://www.reddit.com/best.json`)
  //   const response = await data.json()
  //   setRedditData(await response.data.children)
  // }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   const fetchBest = fetch('https://www.reddit.com/best.json')
  //   .then((res) => res.json())
  //   .then((jsonRes) => {
  //     setRedditData(jsonRes.data.children)
  //   })
  // }, [])

  return (
    <div>
      <RedditClient />
      {/* <button onClick={fetchTest} >Fetch data</button> */}
    </div>
  );
}

export default App;
