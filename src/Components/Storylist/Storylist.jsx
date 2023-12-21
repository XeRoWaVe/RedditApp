import Post from "../Post/Post";

const Storylist = ({ redditData }) => {
  return (
    <div className="flex flex-col items-center z-60">
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
          data={item.data}
        />
      ))}
    </div>
  );
};

export default Storylist;
