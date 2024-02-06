import { time_ago } from "../../Utilities/Utilities";



const Comment = (props) => {

  const createdSince = props.created * 1000
  return (
    <div className="container m-2 p-2 border-2 border-solid shadow-md">
      <p>
        {" "}
        <a
          href={`https://www.reddit.com/user/${props.author}`}
          target="_blank"
          className="text-blue-700 font-bold"
          alt=""
        >
          {props.author}
        </a>
      </p>
      <p>{props.body}</p>
      <p>{time_ago(createdSince)}</p>
    </div>
  );
};

export default Comment;
