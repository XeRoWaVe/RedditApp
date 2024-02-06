import { time_ago } from "../../Utilities/Utilities";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect, useRef, useCallback } from "react";
import ReactPlayer from "react-player";

const Post = ({ created, subreddit, redditData, data, id }) => {
  const [loadComments, setLoadComments] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newTitle = data.title
    .split(" ")
    .join("_")
    .replace(/[^\w\s]/gi, "");

  const createdSince = created * 1000;

  const fetchCommentData = async () => {
    const data = await fetch(
      `https://www.reddit.com/r/${subreddit}/comments/${id}/${newTitle}.json`
    );
    const response = await data.json();
    setCommentData(await response[1].data.children)
    commentData ? setIsLoading(false) : setIsLoading(true)
  };

  const handleComments = () => {
    if (!loadComments) {
      fetchCommentData().catch(console.error)
    }
    setLoadComments(!loadComments);
  };

  return (
    <div className=" bg-white text-black-wash  border-nero  p-10 m-4 shadow-black shadow-xl w-3/6 z-10 rounded-lg">
      <a href={`https://www.reddit.com/${data.permalink}`} target="_blank" aria-label="Post is a link to poster's reddit profile" alt="post body links to author profile page">
        <div className="float-left mr-10">
          <button className="" aria-label="upvote button">
            <svg
              className=" hover:text-green-600 w-6 h-6 text-gray-800 dark:text-white "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 14"
              alt="like button"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </button>
          <h3 className="text-blue-500 font-bold">{data.ups}-Likes</h3>
          <button className="" aria-label="downvote button">
            <svg
              class="w-6 h-6 text-white dark:text-white hover:text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 14"
              alt="dislike button"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1v12m0 0 4-4m-4 4L1 9"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-bold ">{data.title}</h1>
          {data.is_video ? (
            <ReactPlayer
              url={data.media.reddit_video.scrubber_media_url}
              muted
              controls={true}
            />
          ) : data.is_gallery ? (
            <a href={data.url} target="_blank" className="m-8">
              <img src={data.thumbnail} width="360" height="240"
              alt="gallery images" />
              <p>Gallery</p>
            </a>
          ) : data.selftext ? (
            <p className="">{data.selftext}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-between mt-8">
          <p aria-label="posted by">
            Posted By:{" "}
            <a
              href={`https://www.reddit.com/user/${data.author}`}
              target="_blank"
              className="text-blue-700 font-bold"
              aria-label="author name is link to reddot profile"
            >
              {data.author}
            </a>
          </p>
          <p>{time_ago(createdSince)}</p>
        </div>
      </a>
      <div className="flex justify-center">
        {!loadComments ? (
          <button
            value={data.id}
            onClick={handleComments}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            aria-label="button to load comments of post"
          >
            Comments
            <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-700 bg-gray-300 rounded-full">
              {redditData.length}
            </span>
          </button>
        ) : isLoading ? (
          <button
            disabled
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            aria-label="button signals comments are loading"
          >
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        ) : (
          <button
            value={data.id}
            onClick={handleComments}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            aria-label="button to close current comments"
          >
            Close comments
          </button>
        )}
      </div>
      {!!loadComments && <CommentsList commentData={commentData} />}
    </div>
  );
};

export default Post;
