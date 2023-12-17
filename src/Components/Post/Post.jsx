import "./Post.css";
import { time_ago } from "../../Utilities/Utilities";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect } from "react";

const Post = ({ title, author, image, created, subreddit, id }) => {
  const [loadComments, setLoadComments] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const newTitle = title
    .split(" ")
    .join("_")
    .replace(/[^\w\s]/gi, "");
  const handleComments = (e) => {
    if (!loadComments) {
      const fetchCommentData = async () => {
        const data = await fetch(
          `https://www.reddit.com/r/${subreddit}/comments/${id}/${newTitle}.json`
        );
        const response = await data.json();

        setCommentData(response[1].data.children);
      };
      fetchCommentData();
    }
    setLoadComments(!loadComments);
  };
  console.log(commentData)
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
    <div className="post-container">
      <div>
        <h1>{title}</h1>
        <h2></h2>
        <span>
          <img src={image} />
        </span>
        <div>
          <p>posted By {author}</p>
          <p>posted when {time_ago(created)}</p>
          <button value={id} onClick={handleComments}>
            Load Comments
          </button>
          {!!loadComments && <CommentsList commentData={commentData} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
