import { useCallback, useState, useRef, useEffect } from "react";

const Navigation = ({ setRedditData, setSubreddit, subreddit }) => {
  const [term, setTerm] = useState("");
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavigation);

    return () => {
      window.removeEventListener("scroll", stickNavigation);
    };
  }, []);

  const stickNavigation = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("fixed w-[98%] -top-6 z-50")
        : setStickyClass("relative");
    }
  };

  const valueChange = (event) => {
    setSubreddit(event.target.value);
  };

  useEffect(() => {
    const scrollTop = document.getElementById('root')
    scrollTop.scrollTop = 100
    return () => scrollTop.scrollTop = 0
  }, [subreddit])

  const handleChange = useCallback((e) => {
    e.preventDefault();
    const encodeTerm = encodeURIComponent(e.target.value);
    setTerm(encodeTerm);
  });

  const handleSubmit = useCallback(() => {
    if (term !== "") {
      fetch(`https://www.reddit.com/search.json?q=${term}`)
        .then((res) => res.json())
        .then((jsonRes) => setRedditData(jsonRes.data.children))
        .catch((err) => console.log(err));
    } else {
      fetch(`https://www.reddit.com/r/popular.json`)
        .then((res) => res.json())
        .then((jsonRes) => setRedditData(jsonRes.data.children))
        .catch((err) => console.log(err));
    }
  });

  return (
    <div
      className={`navigation z-50 font-bold flex justify-between items-center rounded-full border-nero border-solid m-6 p-2 shadow-black shadow-xl ${stickyClass} bg-white text-black`}
    >
      <a href="/" onClick={() => setSubreddit("home")} aria-label="reddit home page">
        <img
          className="h-12 animate-spin"
          src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
          alt="link to reddit home page"
        />
      </a>
      <h1>XeRoWaVe Reddit</h1>
      <div className="flex">
        <input
          placeholder="Search"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          aria-label="search input to search reddit"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          aria-label="button to submit search input"
        >
          Search
        </button>
      </div>
      <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <a href="https://www.reddit.com/user/XeRoWaVe1989" target="_blank" alt="user profile page">
          <svg
            class="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div>
        <label>Subreddits: </label>
        <select
          className="border-solid border-2 text-black"
          onChange={valueChange}
          aria-label="list of subreddits to view"
        >
          <option>Select</option>
          <option value="OnePiece" aria-label="OnePiece">OnePiece</option>
          <option value="reactjs" aria-label="reactjs">reactjs</option>
          <option value="Overwatch" aria-label="" >Overwatch</option>
          <option value="Science" aria-label="Science" >Science</option>
          <option value="wow" aria-label="wow" >wow</option>
          <option value="blackdesertonline" aria-label="bdo" >bdo</option>
        </select>
      </div>
    </div>
  );
};

export default Navigation;
