import "./Subreddits.css";

const Subreddits = ({ setSubreddit }) => {
  return (
    <div className="w-auto">
         <ul className=" border-solid border-2 rounded-2xl w-56 p-2 
    shadow-lg">
      <li>
        <button
          onClick={() => setSubreddit("OnePiece")}
          className=" hover:bg-sky-700 active:bg-green-200"
        >
          OnePiece
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("reactjs")}
          className="button hover:bg-red-200 "
        >
          reactjs
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("Overwatch")}
          className="button hover:bg-green-200"
        >
          Overwatch
        </button>
      </li>
      <li>
        <button onClick={() => setSubreddit("Science")} className="button hover:bg-purple-200">
          Science
        </button>
      </li>
      <li>
        <button onClick={() => setSubreddit("wow")} className="button hover:bg-yellow-200">
          wow
        </button>
      </li>
      <li>
        <button
          onClick={() => setSubreddit("blackdesertonline")}
          className="button hover:bg-orange-200"
        >
          blackdesertonline
        </button>
      </li>
    </ul>
    </div>
    
  );
};

export default Subreddits;
