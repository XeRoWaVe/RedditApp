import { time_ago } from "../../Utilities/Utilities";

const createdSince = props.created * 1000

const Comment = (props) => {
  return (
    <div className="container m-2 p-2 border-2 border-solid shadow-md">
      <p>
        Author:{" "}
        <a
          href={`https://www.reddit.com/user/${props.author}`}
          target="_blank"
          className="text-blue-700 font-bold"
        >
          {props.author}
        </a>
      </p>
      <p>Body: {props.body}</p>
      <p>Created: {time_ago(createdSince)}</p>
    </div>
  );
};

export default Comment;
