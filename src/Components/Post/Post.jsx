import "./Post.css";
import { time_ago } from "../../Utilities/Utilities";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect } from "react";

const Post = ({ title, author, image, created, subreddit, id, ups, downs }) => {
  const [loadComments, setLoadComments] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const newTitle = title
    .split(" ")
    .join("_")
    .replace(/[^\w\s]/gi, "");

  const handleComments = (e) => {
    if (!loadComments) {
    setIsLoading(true)
      const fetchCommentData = async () => {
        const data = await fetch(
          `https://www.reddit.com/r/${subreddit}/comments/${id}/${newTitle}.json`
        );
        const response = await data.json();
        setCommentData(response[1].data.children);
        setIsLoading(false)
      };
      fetchCommentData();
    }
    setLoadComments(!loadComments);
  };
// console.log(image)
//   const images = () => {
//     if (image[id] !== '') {
//       return <img src={image[id]} />
//     } else {
//       return <></>
//     }
//   }

  // useEffect(() => {
  //     const fetchComments = async () => {
  //       const data = await fetch(
  //         "https://www.reddit.com/r/AskReddit/comments/18ka1lu/what_is_normalized_that_needs_to_be_weird_again.json"
  //       );
  //       const response = await data.json();
  //       setCommentsData(response[1].data.children);
  //     };
  //     fetchComments().catch(console.error)

  //   }, []);

  return (
    <div className=" rounded-sm border-2 border-solid p-2 m-2 shadow-lg ">
        <h1>{title}</h1>
        <h2>{ups}/{downs}</h2>
          {<img className="" src={image} onError={event => {
            event.target.src = ""
            event.onerror = null
          }} />}
          <p>posted By {author}</p>
          <p>posted when {time_ago(created)}</p>
          {!loadComments ? <button value={id} onClick={handleComments} className="border-2 border-solid rounded-md shadow-md p-1 ring-2 hover:ring-4 bg-slate-500 text-white">
            Open Comments
          </button> : <button value={id} onClick={handleComments} className="animate-pulse border-2 border-solid shadow-md rounded-md p-1 ring-2 hover:ring-4 ring-red-900">
            Close comments
          </button>}
          {isLoading && <p>Loading comments...</p>}
          {!!loadComments && <CommentsList commentData={commentData} />}
    </div>
  );
};

export default Post;
