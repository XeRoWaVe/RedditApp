import "./Subreddits.css";

const Subreddits = ({ setSubreddit }) => {
  return (
    <ul className=" list float-right flex-col border-solid border-2 rounded-sm m-2 p-2 
    shadow-lg">
      <li>
        <button
          onClick={() => setSubreddit("OnePiece")}
          className=" hover:bg-sky-700"
        >
          OnePiece
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("reactjs")}
          className="button hover:bg-red-800 "
        >
          reactjs
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("Overwatch")}
          className="button hover:bg-green-600"
        >
          Overwatch
        </button>
      </li>
      <li>
        <button onClick={() => setSubreddit("Science")} className="button">
          Science
        </button>
      </li>
      <li>
        <button onClick={() => setSubreddit("wow")} className="button">
          wow
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("blackdesertonline")}
          className="button"
        >
          blackdesertonline
        </button>
      </li>
    </ul>
  );
};

export default Subreddits;
