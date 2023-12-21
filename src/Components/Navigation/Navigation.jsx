import "./Navigation.css";
import { useCallback, useState, useRef } from "react";

const Navigation = ({ setRedditData, setSubreddit }) => {
  const [term, setTerm] = useState("");
  const inputRef = useRef(null);
  // const handleChange = (e) => {
  //     e.preventDefault()
  //     const target = e.target.value
  //     const encodeTerm = encodeURIComponent(target)
  //     setTerm(encodeTerm)
  //     console.log(term)
  // }
  const handleChange = (e) => {
    e.preventDefault();
    const encodeTerm = encodeURIComponent(e.target.value);
    setTerm(encodeTerm);
  };
  console.log(term);
  const handleSubmit = (e) => {
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
  };

  return (
    <div className="navigation font-bold flex justify-between items-center rounded-full border-2 border-solid m-6 p-2 z-20 shadow-lg">
      <a href="/" onClick={() => setSubreddit("home")}>
        <img
          className="h-12 animate-spin"
          src="https://seeklogo.com/images/R/reddit-logo-23F13F6A6A-seeklogo.com.png"
        />
      </a>
      <h1>XeRoWaVe Reddit</h1>
      <div className="flex">
        <input
          placeholder="Search"
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
      <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <a href="https://www.reddit.com/user/XeRoWaVe1989" target="_blank">
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
    </div>
  );
};

export default Navigation;
