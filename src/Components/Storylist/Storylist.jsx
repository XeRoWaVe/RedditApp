import Post from "../Post/Post";
import "../Storylist/Storylist.css";
import Subreddits from "../Subreddits/Subreddits";

const Storylist = ({ redditData }) => {
  return (
    <div className="">
      {redditData.map((item, idx) => (
        <Post
          key={idx}
          id={item.data.id}
          redditData={redditData}
          title={item.data.title}
          author={item.data.author}
          created={item.data.created}
          image={item.data.thumbnail}
          subreddit={item.data.subreddit}
          ups={item.data.ups}
          downs={item.data.downs}
          height={item.data.thumbnail_height}
          width={item.data.thumbnail_width}
        />
      ))}
    </div>
  );
};

export default Storylist;
