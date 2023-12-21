import "./Post.css";
import { time_ago } from "../../Utilities/Utilities";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect, useRef } from "react";

const Post = ({ title, author, image, created, subreddit, id, ups, width, height, redditData }) => {
  const [loadComments, setLoadComments] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const newTitle = title
    .split(" ")
    .join("_")
    .replace(/[^\w\s]/gi, "");

    // const spotLightEl = document.querySelector('#spotlight')
    // const handleMouseMove = (event) => {
    //   const { clientX, clientY } = event;

    //   spotLightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00000000 10px, #000000ee 350px)`
    // }

  const handleComments = (e) => {
    if (!loadComments) {
      setIsLoading(true);
      const fetchCommentData = async () => {
        const data = await fetch(
          `https://www.reddit.com/r/${subreddit}/comments/${id}/${newTitle}.json`
        );
        const response = await data.json();
        setCommentData(response[1].data.children);
        setIsLoading(false);
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

    
    <div className=" rounded-sm border-2 border-solid p-10 m-10 shadow-xl w-9/12 z-20 " >
      <h1 className="font-bold">{title}</h1>

      <div className="float-left">
    <button className="">
    <svg className=" hover:text-green-600 w-6 h-6 text-gray-800 dark:text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 10 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
</svg>
    </button>
      <h2 className="text-blue-500 font-bold">{ups}-Likes</h2>
    <button className="">
    <svg class="w-6 h-6 text-gray-800 dark:text-black hover:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 10 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
    </svg>
    </button>
      </div>
      {image !== 'self' ? 
        (<img
          className="h-auto max-w-full"
          src={image}
          onError={(event) => {
            event.target.src = "";
            event.onerror = null;
          }}
        />) : (
          <img class="h-auto max-w-full" src=".\src\assets\images\responsive.jpg" alt="image description"></img>
        )
      }
      {/* <img src={image} className={`h-${height} w-${width} m-auto`} /> */}
      <p>posted By <a href={`https://www.reddit.com/user/${author}`} target="_blank" className='text-blue-700 font-bold' >{author}</a></p>
      <p>{time_ago(created)}</p>
      {!loadComments ? (
        <button
          value={id}
          onClick={handleComments}
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Comments
          <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {redditData.length}
          </span>
        </button>
      ) : isLoading ? (
        <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Loading...
</button>
      ) : (<button
        value={id}
        onClick={handleComments}
        className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Close comments
      </button>)}
      {!!loadComments && <CommentsList commentData={commentData} />}
    </div>
  );
};

export default Post;
